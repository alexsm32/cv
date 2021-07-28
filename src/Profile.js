import { Col, Image, Row } from 'react-bootstrap';
import Photo from './img/alex.jpg';


function Profile(props) {
    const Profile = props.Profile;

    return (
        <Col md="7" sm="12" className="bg-pru borde align-self-start" style={{ marginTop: 50 }}>
            <Row>
                <Col lg="5" md="12" className="float-left align-self-center">
                    <Image src={Photo} alt="photo" fluid roundedCircle />
                </Col>
                <Col lg="7" md="12" className="float-right">
                    <h2><b>{Profile.Name}</b> <br /> <small>{Profile.Occupation}</small></h2>
                    {Profile.Description.map((line) => {
                        return (
                            <p>{line}</p>
                        )
                    })}
                </Col>
            </Row>
        </Col>
    )
}

export default Profile;
