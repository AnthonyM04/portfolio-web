import { Container, Row, Col } from "../../util/Bootstrap.jsx";
import data from "../../data/3things.json"
import Panel from "./Panel.jsx";

export default function ThreeThings() {
    return(
        <section id="3things">
            <Container className="my-5 each-element-container">
                    { data.map(
                            (element) => {
                                return element
                                ? <Panel
                                key={element.id}
                                data={element} />
                                : <p>Loading</p>
                            }).sort().reverse()
                    }
            </Container>
        </section>
    )
}