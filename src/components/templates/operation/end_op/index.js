import ModalOpener from "../../../UI/molecules/modal_opener";
import FormGroups from "../../../UI/molecules/form_groups";
import {useState} from "react";
import {create} from "../../../../store/api/create";
import {PATHS} from "../../../../store/api/paths";

const EndOp = (
    {
        user,
        setRunning,
        selected_work_order,
        setTime,
        setEnded,
        onRunningChange,
        currentPre,
        setCurrentPre,
        allreset = false
    }
) => {
    const [error, setError] = useState("");
    const [activeCuttingTime, setActiveCuttingTime] = useState("");
    const [solidPiece, setSolidPiece] = useState("");
    const [scrapPieces, setScrapPieces] = useState("");
    const [show, setShow] = useState(false);

    const handleStopOperation = () => {
        create()
            .post(PATHS.stop_operation(
                solidPiece,
                scrapPieces,
                activeCuttingTime,
                currentPre?.length > 0 ? "1" : "0",
                "1",
                selected_work_order.order,
                selected_work_order.broadcasting,
                selected_work_order.queue,
                selected_work_order.operation_no,
                user.machine_no,
                user.id_no
            ))
            .then(async result => {
                if (result.status === 200) {
                    allreset && await setRunning(false);
                    allreset && await setTime(0)
                    await setEnded(!allreset);
                    allreset && await onRunningChange(0);
                    setCurrentPre([])
                    setShow(false)
                }
            })
            .catch(e => setError(e.message))
    }

    return (
        <ModalOpener
            modal_title="OPERASYON BİTİR"
            button_text="BİTİR"
            button_icon="fa-stop"
            onAction={handleStopOperation}
            showBew={show}
            setShowBew={setShow}
        >
            <form className="form-horizontal auth-form my-4">
                {error}
                <FormGroups label="AKTİF KESME SÜRESİ"
                            onChange={(e) => setActiveCuttingTime(e.target.value)}/>
                <FormGroups label="SAĞLAM ADET" onChange={(e) => setSolidPiece(e.target.value)}/>
                <FormGroups label="FİRE ADET" onChange={(e) => setScrapPieces(e.target.value)}/>
            </form>
        </ModalOpener>
    );
};

export default EndOp;