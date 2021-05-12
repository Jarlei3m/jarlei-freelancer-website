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
        </SocialLinks>
      </InfoContent>
    </InfoContainer>
  );
}
