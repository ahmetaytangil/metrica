import ModalOpener from "../../../UI/molecules/modal_opener";
import FormGroups from "../../../UI/molecules/form_groups";

const EndOp = () => {
    return (
        <ModalOpener
            modal_title="OPERASYON BİTİR"
            button_text="BİTİR"
            button_icon="fa-stop"
        >
            <form className="form-horizontal auth-form my-4">
                <FormGroups label="AKTİF KESME SÜRESİ" />
                <FormGroups label="SAĞLAM ADET" />
                <FormGroups label="FİRE ADET" />
            </form>
        </ModalOpener>
    );
};

export default EndOp;