import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Data from './cv.json';
import Languages from './Languages';
import Contact from './Contact';



function App() {
  return (
    <Container>
      <br />
      <Row>
        <Profile Profile={Data.Profile} />
        <Experience Work={Data.Work} />
      </Row>
      <Row>
        <Education Education={Data.Education} />
        <Col md={{ span: 4, offset: 1 }} sm="12" className="p-0">
        <Languages Languages={Data.Languages} />
        <Contact Contact={Data.Contact} />
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default App;
