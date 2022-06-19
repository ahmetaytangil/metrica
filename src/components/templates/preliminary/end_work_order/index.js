import ModalOpener from "../../../UI/molecules/modal_opener";
import MainButton from "../../../UI/atoms/button/main_button";

const EndWorkOrder = () => {
    return (
        <ModalOpener
            modal_title="ÖN HAZIRLIK BİTİR"
            button_text="BİTİR"
            button_icon="fa-stop"
            footer="none"
        >
            <div className="btn-group w-100">
                <MainButton sx={{padding: "70px", fontSize: "32px"}}>
                    KALİTE KONTROL ONAYI
                </MainButton>
                <MainButton sx={{padding: "70px", fontSize: "32px"}}>
                    ÖN HAZIRLIĞI BİTİR
                </MainButton>
            </div>
        </ModalOpener>
    );
};

export default EndWorkOrder;