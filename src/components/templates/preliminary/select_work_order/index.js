import ModalOpener from "../../../UI/molecules/modal_opener";
import Mtable from "../../../UI/organisms/Mtable";

const SelectWorkOrder = () => {
    return (
        <ModalOpener
            button_text="İŞ EMRİ SEÇ"
            modal_title="İŞ EMRİ SEÇ"
            button_icon="fa-hand-pointer"
        >
            <Mtable
                title="SON İŞLER"
                heads={[
                    {text: "İŞ EMRİ"},
                    {text: "STOK KODU"},
                    {text: "SÜRE"}
                ]}
                bodies={[
                    {
                        items: [
                            {text: "XXXX"},
                            {text: "XXXX"},
                            {text: "XXXX"}
                        ]
                    },
                    {
                        items: [
                            {text: "XXXX"},
                            {text: "XXXX"},
                            {text: "XXXX"}
                        ]
                    }
                ]}
            />
        </ModalOpener>
    );
};

export default SelectWorkOrder;