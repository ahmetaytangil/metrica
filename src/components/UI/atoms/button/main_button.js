const MainButton = ({children, onClick, icon, sx}) => {
    return (
        <button
            onClick={onClick || null}
            className="btn btn-outline-dark"
            style={{paddingBlock: "10px", fontSize: "20px", ...sx || null}}
        >
            <i className={`fa-solid ${icon}`}>{/**/}</i> <br/> {children}
        </button>

    );
};

export default MainButton;