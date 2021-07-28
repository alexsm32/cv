import { Col } from 'react-bootstrap';


function Languages(props) {
    const Languages = props.Languages;

    return (
        <Col xs="12" className="bg-pru borde pb-2 align-self-start" style={{ marginTop: 50 }}>
            <h2 className="ml-3"><b>Languages</b></h2>
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
