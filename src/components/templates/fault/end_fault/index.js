import MainButton from "../../../UI/atoms/button/main_button";

const EndFault = ({handleEndFault}) => {
    return (
        <MainButton icon="fa-stop" onClick={handleEndFault}>
            BİTİR
        </MainButton>
    );
};

export default EndFault;