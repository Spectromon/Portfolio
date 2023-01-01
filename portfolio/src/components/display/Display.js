import DisplayItem from "./components/DisplayItem";
import "./Display.scss";
import data from "./displayData.json";

function Display() {
  return (
    <div className="display__container">
      {data.map(function (item) {
        return(
            <DisplayItem title = {item.title} description = {item.description} image = {item.image}/>
        )
      })}
    </div>
  );
}
export default Display;
