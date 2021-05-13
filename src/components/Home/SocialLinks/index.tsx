import Link from 'next/link';
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Container, Content } from './styles';

export function SocialLinks() {
  return (
    <Container>
      <Content>
        <ul>
          <li>
            <a
              href='https://www.instagram.com/rodrigues.jarlei/'
              target='_blank'
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/jarleirodrigues/'
              target='_blank'
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href='mailto:jarlei_rodrigues@outlook.com' target='_blank'>
              <AiOutlineMail />
            </a>
          </li>
          <li>
            <a href='https://github.com/Jarlei3m' target='_blank'>
              <FaGithub />
            </a>
          </li>

          <li>
            <a
              href='https://api.whatsapp.com/send?1=pt_BR&phone=5524992035033
    &text=Hello Járlei, i came from your website, can we talk?'
              target='_blank'
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
