import Head from 'next/head';
// import { Bio } from '../components/About/Bio';
// import { Cards } from '../components/About/Cards';
// import { Footer } from '../components/About/Footer';
import { Header } from '../components/Work/Header';
import { Projects } from '../components/Work/Projects';
import { BootcampProjects } from '../components/Work/BootcampProjects';
import { SubtitleProject } from '../components/Work/SubtitleProject';
import { Container, Content } from '../styles/Pages/Work/style';
import { SubtitleBootcampProject } from '../components/Work/SubtitleBootcampProject';
import { Footer } from '../components/Work/Footer';

export default function Work() {
  return (
    <>
      <Head>
        <title> Work | Járlei Rodrigues </title>
      </Head>

      {/* WORK */}
      <Container>
        <Content>
          <Header />
          <SubtitleProject />
          <Projects />
          <SubtitleBootcampProject />
          <BootcampProjects />
        </Content>
        <Footer />
      </Container>
    </>
  );
}
