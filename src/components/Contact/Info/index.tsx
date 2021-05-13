import { InfoContainer, InfoContent, SocialLinks } from './styles';
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export function Info() {
  return (
    <InfoContainer>
      <InfoContent>
        <div>
          <h4>MY ADDRESS</h4>

          <address>
            27.281-680 Volta Redonda <br />
            Rio de Janeiro | Brasil
          </address>
        </div>

        <div>
          <h4>MY CONTACT</h4>

          <address>
            jarlei_rodrigues@outlook.com <br />
            +55 (24) 9.9203-5033
          </address>
        </div>

        <SocialLinks>
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
        </SocialLinks>
      </InfoContent>
    </InfoContainer>
  );
}
