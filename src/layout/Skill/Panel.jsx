import { Image } from "../../util/Bootstrap.jsx";

export default function Panel( {name} ) {

  return (
    <Image
      src={`${process.env.PUBLIC_URL}/img/skills/${name}.svg`}
      className="button-effect"
      style={{display: "inline-block", width: "100px", padding: '3px'}} />
  );
}