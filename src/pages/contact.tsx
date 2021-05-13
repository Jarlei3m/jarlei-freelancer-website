import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import { Footer } from '../components/Contact/Footer';
import { Info } from '../components/Contact/Info';
import { Map } from '../components/Contact/Map';
// import { Header } from '../components/Home/Header';
// import { SocialLinks } from '../components/Home/SocialLinks';
// import { Subtitle } from '../components/Home/Subtitle';
import { Container, Content } from '../styles/Pages/Contact/styles';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Contact | Járlei Rodrigues </title>
      </Head>

      {/* Contact Page */}
      <Container>
        <ToastContainer />
        <Content>
          <Map />
          <Info />
        </Content>
        <Footer />
      </Container>
    </div>
  );
}
