import { Col } from 'react-bootstrap';

function Education(props) {
    const Education = props.Education;

    return (
        <Col md="7" sm="12" className="bg-pru borde align-self-start pb-2" style={{ marginTop: 50 }}>
            <h2 className="ml-3"><b>Education</b></h2>
            <br />
            {Education.map((edu) => {
                return (
                    <div>
                        <h4><u>{edu.Title}</u></h4>
                        <p><b>{edu.School}</b> <small>({edu.Place})</small></p>
                        <p>From {edu.Start} to {edu.End}</p>
                        <p><b>Courses:</b></p>
                        <ul>
                            {edu.Courses.map((course) => {
                                return(
                                    <li>{course}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </Col>
    )
}

export default Education;
