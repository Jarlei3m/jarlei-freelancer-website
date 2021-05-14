import { FaEye, FaGithub } from 'react-icons/fa';
import { Card, ProjectContainer } from './styles';

export function Projects() {
  return (
    <ProjectContainer>
      <Card>
        <img src='moveit.png' alt='moveit' />
        <nav>
          <a href='#'>
            <FaEye />
            Website
          </a>

          <a href='https://github.com/Jarlei3m/Move.it-Nextjs' target='_blank'>
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>

      <Card>
        <img src='wlassalivros_desktop.png' alt='Wilsson Lassarote Livros' />
        <nav>
          <a href='https://wilson-next.vercel.app/' target='_blank'>
            <FaEye />
            Website
          </a>
          <a href='https://github.com/Jarlei3m/wilson-books' target='_blank'>
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>

      <Card>
        <img src='dedeltattoo_desktop.jpg' alt='Dedel Tattoo Studio' />
        <nav>
          <a href='https://dedeltattoo.netlify.app/' target='_blank'>
            <FaEye />
            Website
          </a>
          <a href='https://github.com/Jarlei3m/dedeltattoo-web' target='_blank'>
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>
    </ProjectContainer>
  );
}
