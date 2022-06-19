import FormGroups from "../../../UI/molecules/form_groups";
import ModalOpener from "../../../UI/molecules/modal_opener";

const Report = () => {
    return (
        <ModalOpener
            modal_title="OPERASYON RAPORLA"
            button_text="RAPORLA"
            button_icon="fa-file"
        >
            <form className="form-horizontal auth-form my-4">
                <FormGroups label="RAPORLANACAK SAĞLAM ADET" />
                <FormGroups label="RAPORLANACAK FİRE ADET" />
            </form>
        </ModalOpener>
    );
};

export default Report;