const Button = ({children, icon, onClick, sx}) => {
    return (
        <button
            onClick={onClick || null}
            type="button"
            className="btn btn-outline-dark"
            style={{fontSize: 20, ...sx || null}}
        >
            {icon &&
                <i className={`fa-solid ${icon}`} style={{marginRight: 10}}>
                    {/**/}
                </i>
            }
            {children}
        </button>
    );
};

export default Button;