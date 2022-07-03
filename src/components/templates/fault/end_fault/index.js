import MainButton from "../../../UI/atoms/button/main_button";

const EndFault = ({handleEndFault, disabled}) => {
    return (
        <MainButton
            icon="fa-stop"
            onClick={handleEndFault}
            disabled={disabled}
        >
            BİTİR
        </MainButton>
    );
};

export default EndFault;