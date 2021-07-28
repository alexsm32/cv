import { Col } from 'react-bootstrap';


function Languages(props) {
    const Languages = props.Languages;

    return (
        <Col xs="12" className="bg-pru borde pb-2 align-self-start" style={{ marginTop: 50 }}>
            <h3 className="ml-3">Languages</h3>
            <ul>
                {Languages.map((language) => {
                    return (
                        <li><b>{language.Language}:</b> {language.Level}</li>
                )
                })}
            </ul>
        </Col>
    )
}

export default Languages;
