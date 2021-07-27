import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App {...store} />, rootElement);

store.subscribe(render);
render();
