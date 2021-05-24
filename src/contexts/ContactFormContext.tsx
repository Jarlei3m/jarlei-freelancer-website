import { createContext, FormEvent, ReactNode, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { phoneMask, validMail } from "../utils/masks";

interface ClientProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormContextData {
  client: ClientProps;
  isPhoneValid: boolean;
  isEmailValid: boolean;
  isLoading: boolean;
  handleChange: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleKeyUp: (e: React.FormEvent<HTMLInputElement>) => void;
  handleContactFormSubmit: (e: FormEvent) => Promise<void>
}

interface ContactFormProviderProps {
  children: ReactNode;
}

export const ContactFormContext = createContext({} as ContactFormContextData);

export function ContactFormProvider({ children }: ContactFormProviderProps) {
  const [client, setClient] = useState<ClientProps>({} as ClientProps);

  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isEmailValid ,setIsEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setClient({
      ...client,
      [name]: value
    });

  }, [client]);


  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    
    // Phone number
    if ( e.currentTarget.name === 'phone' && e.currentTarget.value !== '') {
      phoneMask(e);
      setIsPhoneValid(true);

      // const phoneFormat = /(\+\d{2}\s)\(\d{2}\)\s\d{5}\-\d{4}/
      const phoneFormat = /\(\d{2}\)\s\d{4,5}\-\d{4}/

      if (e.currentTarget.value && phoneFormat.test(e.currentTarget.value)) {
        setIsPhoneValid(true);
      } else {
        setIsPhoneValid(false);
      }
    }

    // Email
    if (e.currentTarget.name === 'email' && e.currentTarget.value !== '') {
      setIsEmailValid(true);

      validMail(e) ? setIsEmailValid(true) : setIsEmailValid(false);
    }

  }, [client]);

  async function handleContactFormSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    if (isPhoneValid && isEmailValid) {
      try {
        await fetch('api/contact', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(client),
          
        }).then((res) => {
          if (res.status === 200) {
            setClient({
              ...client,
              name: '',
              email: '',
              phone: '',
              message: ''
            });
            toast.success('Message sent successfully.');
            setIsLoading(false);
          }
        });
      } catch (error) {
        console.log('ERROR:', error);
      }
    } else {
      toast.error('Por favor, preencha os campos corretamente');
      setIsLoading(false)
    }
  };


  return (
    <ContactFormContext.Provider value={{
        client, 
        handleChange,
        handleKeyUp,
        handleContactFormSubmit,
        isPhoneValid,
        isLoading,
        isEmailValid
      }}>
      {children}
    </ContactFormContext.Provider>
  )
}