import FormGroups from "../../../UI/molecules/form_groups";
import ModalOpener from "../../../UI/molecules/modal_opener";
import {create} from "../../../../store/api/create";
import {PATHS} from "../../../../store/api/paths";
import {useState} from "react";

const Report = ({user, selected_work_order, setEnded, setRunning}) => {
    const [solidPiece, setSolidPiece] = useState(" ");
    const [scrapPieces, setScrapPieces] = useState(" ");

    const handleReport = () => {
        create()
            .post(PATHS.raport_operation(
                selected_work_order.order,
                selected_work_order.broadcasting,
                selected_work_order.queue,
                user.id_no,
                selected_work_order.operation_no,
                solidPiece,
                scrapPieces,
                user.machine_no,
                "00:00:00"
            ))
            .then(result => {
                if (result.status === 200) {
                    setEnded(false)
                    setRunning(false)
                }
            })
    }

    return (
        <ModalOpener
            modal_title="OPERASYON RAPORLA"
            button_text="RAPORLA"
            button_icon="fa-file"
            onAction={handleReport}
        >
            <form className="form-horizontal auth-form my-4">
                <FormGroups label="RAPORLANACAK SAĞLAM ADET" onChange={(e) => setSolidPiece(e.target.value)}/>
                <FormGroups label="RAPORLANACAK FİRE ADET" onChange={(e) => setScrapPieces(e.target.value)}/>
            </form>
        </ModalOpener>
    );
};

export default Report;