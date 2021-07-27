import Profile from './Profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Data from './cv.json';



function App() {
  return (
    <Container>
      <br />
      <Row>
        <Profile Profile={Data.Profile} />
          
      </Row>
    </Container>
  );
}

export default App;
