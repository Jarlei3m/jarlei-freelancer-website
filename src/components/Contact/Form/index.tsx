import { FormEvent, useState } from 'react';
import { FormContainer } from './styles';
import { toast } from 'react-toastify';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const phoneFormat = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;

  function handlePhoneInput(inputValue: string) {
    const inputNumber = inputValue.replace(/[^\d]/g, '');
    const currentNumberLength = inputNumber.length;

    if (currentNumberLength < 4) {
      return setPhone(inputNumber);
    }

    // return: 'x', 'xx'
    if (currentNumberLength < 6) {
      const normalizedNumber = `+${inputNumber.slice(0, 2)} ${inputNumber.slice(
        2
      )} `;
      return setPhone(normalizedNumber);
    }

    // return: '(xx)', '(xx) x', '(xx) xx', '(xx) xxx', '(xx) xxxx'
    if (currentNumberLength < 9) {
      const normalizedNumber = `+${inputNumber.slice(
        0,
        2
      )} (${inputNumber.slice(2, 4)}) ${inputNumber.slice(4)} `;
      return setPhone(normalizedNumber);
    }

    // return: '(xx) xxxx-', '(xx) xxxx-x', '(xx) xxxx-xx', '(xx) xxxx-xxx', '(xx) xxxx-xxxx'
    const normalizeNumberCompleted = `+${inputNumber.slice(
      0,
      2
    )} (${inputNumber.slice(2, 4)}) ${inputNumber.slice(
      4,
      9
    )}-${inputNumber.slice(9, 13)}`;
    return setPhone(normalizeNumberCompleted);
  }
  console.log('tipe: ', typeof phone);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    const contactInfo = {
      name,
      email,
      phone,
      message,
    };

    try {
      await fetch('api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactInfo),
      }).then((res) => {
        console.log('response received');

        if (res.status === 200) {
          console.log('Response succeeded!');
          toast.success('Message sent successfully.');
          setIsLoading(false);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        }
      });
    } catch (error) {
      console.log('ERROR:', error);
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h3>Get In Touch!</h3>

      <div>
        <input
          required
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Name</span>
      </div>

      <div>
        <input
          required
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>Email</span>
      </div>

      <div>
        <input
          required
          type='tel'
          // pattern='([0-9]){2}[0-9]{5}-[0-9]{4}'
          placeholder='+55 21 9xxxx-xxxx'
          value={phone}
          onChange={(e) => handlePhoneInput(e.target.value)}
        />
        <span>Phone</span>
      </div>

      <div>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <span>Message</span>
      </div>

      <div>
        <button type='submit' disabled={!!isLoading}>
          {isLoading ? 'Sending...' : 'SEND MESSAGE'}
        </button>
      </div>
    </FormContainer>
  );
}
