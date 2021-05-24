import React, { useContext } from 'react';
import { ContactFormContext } from '../../../contexts/ContactFormContext';
import { FormContainer } from './styles';

export function Form() {
  const { 
    client, 
    handleChange, 
    handleContactFormSubmit, 
    handleKeyUp,
    isLoading,
    isPhoneValid,
    isEmailValid
  } = useContext(ContactFormContext);  

  const errors = {
    clientEmail: 'Por favor, insira um email válido',
    clientPhone: 'Por favor, insira um telefone válido',
  };
  
  return (
    <FormContainer onSubmit={handleContactFormSubmit}>
      <h3>Get In Touch!</h3>

      <div>
        <input
          required
          value={client.name ? client.name : ''}
          name='name'
          type='text'
          onChange={handleChange}
        />
        <span>Name</span>
      </div>

      <div>
        <input
          required
          name='email' 
          value={client.email ? client.email : ''}
          type='text'
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
        <span>Email</span>
        {!isEmailValid && 
          <small>
            {errors.clientEmail}
          </small>
        }
      </div>

      <div>
        <input
          required
          value={client.phone ? null : ''}
          name='phone'
          type='text'
          placeholder='(__) _____-____'
          onKeyUp={handleKeyUp}
          onChange={handleChange}
        />
        <span>Phone</span>
        {!isPhoneValid && 
          <small>
            {errors.clientPhone}
          </small>
        }
      </div>

      <div>
        <textarea
          required
          value={client.message ? client.message : ''}
          name='message'
          onChange={handleChange}
        ></textarea>
        <span>Message</span>
      </div>

      <div>
        <button type='submit' disabled={!!isLoading}>
          {isLoading ? <img src="loading.gif" alt="loading..." /> : 'SEND MESSAGE'}
        </button>
      </div>
    </FormContainer>
  );
}
