import Head from 'next/head';
import { Bio } from '../components/About/Bio';
import { Cards } from '../components/About/Cards';
import { Footer } from '../components/About/Footer';
import { Header } from '../components/About/Header';
import { Subtitle } from '../components/About/Subtitle';
import { Container, Content } from '../styles/Pages/About/style';

export default function About() {
  return (
    <div>
      <Head>
        <title> About | Járlei Rodrigues </title>
      </Head>

      {/* HOME */}
      <Container>
        <Content>
          <Header />
          <Subtitle />
          <Bio />
          <Cards />
        </Content>
        <Footer />
      </Container>
    </div>
  );
}
