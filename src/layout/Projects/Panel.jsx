import { Col, Card } from "../../util/Bootstrap";

export default function Panel ({ data:{id, name, about, website, cover} }) {
  
  return (
    <Col key={id} md={10} lg={6} xl={4}>
      <Card className="portfolio-panel button-effect ">
        <figure>
          <a href={website} 
             target="_blank"
             rel="noreferrer"><Card.Img
            src={`${process.env.PUBLIC_URL}/img/${cover}`} /></a>
        </figure>
        
        <div className="content">
          <h3>{name}</h3>
          <p>{about}</p>
        </div>
      </Card>
    </Col>
  );
}
