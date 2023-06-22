export default function Panel({ data:{title, description, icon, alt}}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            className="qf-img"
            src={`${process.env.PUBLIC_URL}/img/3things/${icon}`} 
            alt={alt} fluid
          />
          <p className="title">{title}</p>
        </div>
        <div className="flip-card-back">
          <h4 className="title">{title}</h4>
          <p className="flip-card-text">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
