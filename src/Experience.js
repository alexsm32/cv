import { Col } from 'react-bootstrap';


function Experience(props) {
    const Work = props.Work;

    return (
        <Col md={{ span: 4, offset: 1 }} sm="12" className="bg-pru borde align-self-start pb-2" style={{ marginTop: 50 }}>
            <h2 className="ml-3"><b>Experience</b></h2>
            <br />
            {Work.map((job) => {
                return (
                    <div>
                        <h4><u><b>{job.Company}:</b> {job.Rol}</u></h4>
                        <small>({job.Place})</small>
                        <p>From {job.Start} to {job.End}</p>
                        <p><b>Tasks:</b></p>
                        <ul>
                            {job.Tasks.map((task) => {
                                return(
                                    <li>{task}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </Col>
    )
}

export default Experience;
