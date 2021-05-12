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

export function Projects() {
  const [image, setImage] = useState('');
  const [gifVersion, setGifVersion] = useState('desktop');

  function handleMouseOverImageAttribute(image) {
    if (gifVersion === 'desktop') {
      const desktopGif = image + '_desktop.gif';
      setImage(desktopGif);
    }

    if (gifVersion === 'mobile') {
      const mobileGif = image + '_mobile.gif';
      setImage(mobileGif);
    }
  }

  function handleMouseLeaveImageAttribute(image) {
    const desktopGif = image + '_desktop.png';
    setImage(desktopGif);
    setGifVersion('desktop');
  }

  return (
    <ProjectContainer>
      <Card>
        <img
          src={image === 'moveit.gif' ? image : 'moveit.png'}
          alt='move it'
          onMouseOver={() => handleMouseOverImageAttribute('moveit.gif')}
          onMouseLeave={() => handleMouseLeaveImageAttribute('moveit.png')}
        />
        <nav>
          <a>
            <FaEye />
            Website
          </a>
          <a href='https://github.com/Jarlei3m' target='_blank'>
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>

      <Card>
        <div>
          <span>
            <IoDesktop
              className={gifVersion === 'desktop' ? 'active' : ''}
              onClick={() => setGifVersion('desktop')}
            />
          </span>
          <span>
            <AiTwotoneMobile
              className={gifVersion === 'mobile' ? 'active' : ''}
              onClick={() => setGifVersion('mobile')}
            />
          </span>
        </div>
        <img
          className={image === 'wlassalivros_mobile.gif' && 'mobile'}
          src={
            image === 'wlassalivros_desktop.gif'
              ? `${image}`
              : image === 'wlassalivros_mobile.gif'
              ? `${image}`
              : `wlassalivros_desktop.png`
          }
          alt='wilson lassarote livros'
          onMouseOver={() => handleMouseOverImageAttribute('wlassalivros')}
          onMouseLeave={() => handleMouseLeaveImageAttribute('wlassalivros')}
        />
        <nav>
          <a href='https://wilson-next-jarlei3m.vercel.app/' target='_blank'>
            <FaEye />
            Website
          </a>
          <a href='https://github.com/Jarlei3m' target='_blank'>
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>

      <Card>
        <div>
          <span>
            <IoDesktop
              className={gifVersion === 'desktop' ? 'active' : ''}
              onClick={() => setGifVersion('desktop')}
            />
          </span>
          <span>
            <AiTwotoneMobile
              className={gifVersion === 'mobile' ? 'active' : ''}
              onClick={() => setGifVersion('mobile')}
            />
          </span>
        </div>
        <img
          className={image === 'dedeltattoo_mobile.gif' && 'mobile'}
          src={
            image === 'dedeltattoo_desktop.gif'
              ? `${image}`
              : image === 'dedeltattoo_mobile.gif'
              ? `${image}`
              : `dedeltattoo_desktop.jpg`
          }
          alt='Dedel tattoo'
          onMouseOver={() => handleMouseOverImageAttribute('dedeltattoo')}
          onMouseLeave={() => handleMouseLeaveImageAttribute('dedeltattoo')}
        />
        <nav>
          <a href='https://dedeltattoo.netlify.app/' target='_blank'>
            <FaEye />
            Website
          </a>
          <a href='https://github.com/Jarlei3m' target='_blank'>
            <FaGithub />
            GitHub
          </a>
        </nav>
      </Card>
    </ProjectContainer>
  );
}
