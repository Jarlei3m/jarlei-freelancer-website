import { ProjectContainer, Card } from './styles';
import Link from 'next/link';
import { FaEye, FaGithub } from 'react-icons/fa';
import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiTwotoneMobile,
} from 'react-icons/ai';
import { IoDesktop } from 'react-icons/io5';
import { useState } from 'react';

export function BootcampProjects() {
  const [image, setImage] = useState('');
  const [gifVersion, setGifVersion] = useState('desktop');

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
    </ProjectContainer>
  );
}
