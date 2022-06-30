import ModalOpener from "../../../UI/molecules/modal_opener";
import MainButton from "../../../UI/atoms/button/main_button";
import {useState} from "react";
import {create} from "../../../../store/api/create";
import {PATHS} from "../../../../store/api/paths";

const EndWorkOrder = ({setRunning, selected_work_order, user, setTime, onRunningChange}) => {
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = (status) => {
        create()
            .post(PATHS.stop_preliminary(
                selected_work_order.order,
                selected_work_order.broadcasting,
                selected_work_order.queue,
                status,
                user.machine_no,
                selected_work_order.operation_no,
                user.id_no
            ))
            .then(async result => {
                if (result.status === 200 && status !== "1") {
                    await setTime(0);
                    await setRunning(false);
                    await onRunningChange(0)
                } else {
                    setShow(false)
                }
            })
            .catch(e => setError(e.response.data.message || e.message))
    }

    return (
        <ModalOpener
            modal_title="ÖN HAZIRLIK BİTİR"
            button_text="BİTİR"
            button_icon="fa-stop"
            footer="none"
            showBew={show}
            setShowBew={setShow}
        >
            <div className="btn-group w-100">
                {error}
                <MainButton
                    onClick={() => handleClick("1")}
                    sx={{padding: "70px", fontSize: "32px"}}
                >
                    KALİTE KONTROL ONAYI
                </MainButton>
                <MainButton
                    onClick={() => handleClick("2")}
                    sx={{padding: "70px", fontSize: "32px"}}
                >
                    ÖN HAZIRLIĞI BİTİR
                </MainButton>
            </div>
        </ModalOpener>
    );
};

export default EndWorkOrder;