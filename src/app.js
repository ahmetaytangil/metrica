import './assets/bootstrap.css';
import './assets/app.css';
import {Routes, Route} from "react-router-dom";
import {routes} from "./routes";
import {makeId} from "./utils/helpers";
import useStoreFetcher from "./hooks/useStoreFetcher";
import {connect} from "react-redux";
import {storeUsers} from "./store/auth/auth.slice";
import {PATHS} from "./store/api/paths";
import {Navigate} from "react-router-dom";

const App = (
    {
        user,
        users,
        storeUsersDis
    }
) => {
    const {
        loading,
        error
    } = useStoreFetcher(
        users,
        storeUsersDis,
        PATHS.admins
    );

    if (error) {
        return (
            <p>{error}</p>
        )
    }

    return !loading ? (
        <Routes>
            {routes.map(route => {
                return (
                    <Route
                        key={makeId()}
                        path={route.path}
                        element={
                            (!user && route.path !== "/login")
                                ? <Navigate to="/login" replace/>
                                : (user && route.path === "/login")
                                    ? <Navigate to="/" replace/>
                                    : route.element
                        }
                    />
                )
            })}
        </Routes>
    ) : null;
}

const mapStateToProps = (state) => ({
    users: state.auth.users,
    user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
    storeUsersDis: (data) => dispatch(storeUsers(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
