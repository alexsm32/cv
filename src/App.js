import Profile from './Profile';
import Experience from './Experience';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Data from './cv.json';



function App() {
  return (
    <Container>
      <br />
      <Row>
        <Profile Profile={Data.Profile} />
        <Experience Work={Data.Work} />
      </Row>
    </Container>
  );
}

export default App;
