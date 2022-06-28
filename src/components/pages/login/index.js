import {storeUser} from "../../../store/auth/auth.slice";
import {connect} from "react-redux";
import useLogin from "./useLogin";
import Error from "../../UI/atoms/error";
import {useNavigate} from "react-router-dom";

const Login = ({users, storeUserDis}) => {
    let history = useNavigate();
    const {on, error} = useLogin(users, storeUserDis, history)

    return (
        <div className="container-md">
            <div className="row vh-100 d-flex justify-content-center">
                <div className="col-12 align-self-center">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 mx-auto">
                                <div className="card">
                                    <div className="card-body p-0 auth-header-box">
                                        <div className="text-center p-3">
                                            <h4 className="mt-3 mb-1 fw-semibold text-white font-18">
                                                YILMAZ SMART
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <form className="my-4" onSubmit={on.submit}>
                                            <div className="form-group mb-2">
                                                <label className="form-label">
                                                    Kullanıcı Adı
                                                </label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="form-control"
                                                    placeholder="Kullanıcı adınızı giriniz"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label className="form-label">
                                                    Şifre
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Şifrenizi giriniz"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group mb-0 row">
                                                <div className="col-12">
                                                    <div className="d-grid mt-3">
                                                        <input
                                                            type="submit"
                                                            value="GİRİŞ YAP"
                                                            className="btn btn-primary"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <Error error={error} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({users: state.auth.users})

const mapDispatchToProps = (dispatch) => ({
    storeUserDis: (data) => dispatch(storeUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
