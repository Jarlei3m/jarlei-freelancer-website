import { FormEvent, useState } from 'react';
import { FormContainer } from './styles';
import { toast } from 'react-toastify';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const contactInfo = {
      name,
      email,
      phone,
      message,
    };

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
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
    });
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
        <span>Nome</span>
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
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <button type='submit'>SEND MESSAGE</button>
      </div>
    </FormContainer>
  );
}
