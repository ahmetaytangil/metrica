import './assets/bootstrap.css';
import './assets/app.css';
import {Routes, Route} from "react-router-dom";
import {routes} from "./routes";
import {makeId} from "./utils/helpers";

function App() {
    return (
        <div>
            <Routes>
                {routes.map(route => (
                    <Route
                        key={makeId()}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                ))}
            </Routes>
        </div>
    );
}

export default App;
