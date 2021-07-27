import { Col, Image, Row } from 'react-bootstrap';
import Photo from './img/alex.jpg';


function Profile(props) {
    const Profile = props.Profile;

    return (
        <Col md="7" sm="12" className="bg-pru borde">
            <Row>
                <Col lg="5" md="7" className="float-left">
                    <Image src={Photo} alt="photo" fluid roundedCircle />
                </Col>
                <Col lg="7" md="5" className="float-right">
                    <h2>{Profile.Name} <br /> <small>{Profile.Occupation}</small></h2>
                    <p>{Profile.Description}</p>
                </Col>
            </Row>
        </Col>
    )
}

export default Profile;
