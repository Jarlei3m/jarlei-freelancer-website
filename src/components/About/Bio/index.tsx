import { Container, ImageContent, BioContent } from './styles';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';
import {
  SiNextDotJs,
  SiJavascript,
  SiStyledComponents,
  SiMongodb,
  SiTypescript,
  SiNodeDotJs,
  SiSass,
} from 'react-icons/si';

export function Bio() {
  return (
    <Container>
      <ImageContent>
        <img src='/jarlei_portrait.jpg' alt='Járlei Rodrigues' />
      </ImageContent>

      <BioContent>
        <h3>BIO</h3>
        <p>
          Analytical and self-starting Front-End Developer, passionate about
          technology eco-system and code addict. At my GitHub, you can check
          some of my repos which simulate and solve real issues commonly found
          in front-end development, and how I keep an organized workflow with
          descriptive commits to implement good development principles as well.
        </p>

        <h3>Technologies</h3>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AiFillHtml5 />
          <FaCss3Alt />
          <SiJavascript />
          <SiTypescript />
          <FaReact />
          <SiNextDotJs />
          <SiStyledComponents />
          <SiSass />
          <SiNodeDotJs />
          <SiMongodb />
          <FaGitAlt />
        </p>
      </BioContent>
    </Container>
  );
}
