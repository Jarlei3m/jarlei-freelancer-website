import { Container, Card } from './styles';

export function Cards() {
  return (
    <Container>
      <Card className='one'>
        <h3>Move.it</h3>
        <h6>Fullstack Developer</h6>
        <p>
          A gamifying platform Pomodoro system based.
          <br /> Developed for those who work several hours in front of the
          computer, and forget about body care. Do not stand still, let´s
          Move.it!
        </p>
      </Card>

      <Card className='two'>
        <h3>Wilson Lassarote Livros</h3>
        <h6>Front End Developer</h6>
        <p>
          A single-page portfolio website for presenting the author and his
          books.
        </p>
      </Card>

      <Card className='three'>
        <h3>Dedel Tattoo</h3>
        <h6>Front End Developer</h6>
        <p>
          A tatoo studio website.
          <br />
          My first website developed with HTML, CSS and vanilla Javascript.
        </p>
      </Card>
    </Container>
  );
}
