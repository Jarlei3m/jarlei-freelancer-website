import { FaEye, FaGithub } from 'react-icons/fa';
import { Card, ProjectContainer } from './styles';

export function BootcampProjects() {
  return (
    <ProjectContainer>
      <Card>
        <img src='ignews_desktop.png' alt='ignews' />
        <nav>
          <a href='#'>
            <FaEye />
            Website
          </a>

          <a href='https://github.com/Jarlei3m/ig-news' target='_blank'>
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>

      <Card>
        <img src='ecoleta_desktop.png' alt='Ecoleta' />
        <nav>
          <a href='https://br-ecoleta.herokuapp.com/' target='_blank'>
            <FaEye />
            Website
          </a>
          <a href='https://github.com/Jarlei3m/nlw-ecoleta' target='_blank'>
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>

      <Card>
        <img src='comfysloth_desktop.png' alt='comfysloth' />
        <nav>
          <a
            href='https://ecommerce-comfy-sloth-store.netlify.app/'
            target='_blank'
          >
            <FaEye />
            Website
          </a>
          <a
            href='https://github.com/Jarlei3m/Comfy-Sloth-Store-ReactJS'
            target='_blank'
          >
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>

      <Card>
        <img src='git_search.png' alt='GitHub User Metrics Searcher' />
        <nav>
          <a
            href='https://search-github-users-metrics.netlify.app/'
            target='_blank'
          >
            <FaEye />
            Website
          </a>
          <a
            href='https://github.com/Jarlei3m/Search-Github-Users-ReactJS'
            target='_blank'
          >
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>
    </ProjectContainer>
  );
}
