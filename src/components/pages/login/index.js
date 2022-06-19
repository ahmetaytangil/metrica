const Login = () => {
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
                                        <form className="my-4">
                                            <div className="form-group mb-2">
                                                <label className="form-label">Kullanıcı Adı </label>
                                                <input type="text" className="form-control"
                                                       placeholder="Kullanıcı adınızı giriniz"/>
                                            </div>
                                            <div className="form-group mt-3">
                                                <label className="form-label">Şifre</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Şifrenizi giriniz"
                                                />
                                            </div>
                                            <div className="form-group mb-0 row">
                                                <div className="col-12">
                                                    <div className="d-grid mt-3">
                                                        <button className="btn btn-primary">GİRİŞ
                                                            YAP
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
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

export default Login;