import { Container, Row, Col, Button } from "../../util/Bootstrap.jsx";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return(
        <Container className="justify-content-center">
            <Row>
                <Col>
                    <h2>404</h2>
                    <Button as={Link} to='/'>Go back</Button>
                </Col>
            </Row>
        </Container>
    )
}
