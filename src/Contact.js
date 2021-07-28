import { Col } from 'react-bootstrap';

function Contact(props) {
    const Contact = props.Contact;

    return(
        <Col xs="12" className="bg-pru borde pb-2 pl-3" style={{ marginTop: 50 }}>
            <h3 className="text-center">Contact</h3>
            <p>Email: <a href={"mailto:" + Contact.Email} >{Contact.Email}</a></p>
            <p>Linkedin: <a href={"https://" + Contact.Linkedin}>Alejandro Sanz Martin</a></p>
        </Col>
    )
}

export default Contact;
