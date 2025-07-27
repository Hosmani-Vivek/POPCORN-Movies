import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import StarRating from "./StarRating";

/*function Test() {
  const [MR, SMR] = useState(0);
  return (
    <div>
      <StarRating colour="blue" onSR={SMR} MaxStars={10} />
      <p>you have rated {MR} stars</p>
    </div>
  );
}*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/*<Test />*/}
  </React.StrictMode>
);
