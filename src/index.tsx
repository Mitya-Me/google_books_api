import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import { store } from "./store";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById("root")
);
