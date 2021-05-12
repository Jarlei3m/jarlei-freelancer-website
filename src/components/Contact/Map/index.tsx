import { Form } from '../Form';
import { Container, Content } from './styles';

export function Map() {
  return (
    <Container>
      <Content>
        <h1>
          Contact <span>Me</span>
        </h1>

        <Form />
        {/* <form action=''>
          <h3>Get In Touch!</h3>

          <div>
            <input required type='text' />
            <span>Nome</span>
          </div>

          <div>
            <input required type='email' />
            <span>Email</span>
          </div>

          <div>
            <input required type='text' />
            <span>Phone</span>
          </div>

          <div>
            <textarea required></textarea>
            <span>Message</span>
          </div>

          <div>
            <button>SEND MESSAGE</button>
          </div>
        </form> */}
      </Content>
    </Container>
  );
}
