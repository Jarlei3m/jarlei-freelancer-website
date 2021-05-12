import Head from 'next/head';
import { Header } from '../components/Home/Header';
import { SocialLinks } from '../components/Home/SocialLinks';
import { Subtitle } from '../components/Home/Subtitle';
import { Container, Content } from '../styles/Pages/Home/styles';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Home | Járlei Rodrigues </title>
      </Head>

      {/* HOME */}
      <Container>
        <Content>
          <Header />
          <Subtitle />
          <SocialLinks />
        </Content>
      </Container>
    </div>
  );
}
