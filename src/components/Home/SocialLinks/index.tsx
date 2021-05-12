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
            <a>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href='mailto:jarlei_rodrigues@outlook.com'>
              <AiOutlineMail />
            </a>
          </li>
          <li>
            <a>
              <FaGithub />
            </a>
          </li>

          <li>
            <a>
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
