import MainButton from "../../../UI/atoms/button/main_button";
import {create} from "../../../../store/api/create";
import {PATHS} from "../../../../store/api/paths";
import {useState} from "react";

const StartOp = ({setRunning, selected_work_order, user}) => {
    const [error,setError] = useState("")

    const handleStartOperation = () => {
        create()
            .post(PATHS.start_operation(
                selected_work_order.order,
                selected_work_order.broadcasting,
                selected_work_order.queue,
                selected_work_order.operation_no,
                user.id_no,
                user.machine_no
            ))
            .then(result => {
                if (result.status === 200) {
                    setRunning(true);
                }
            })
            .catch(e => setError(e.message))
    }

    return (
        <MainButton icon="fa-play" onClick={handleStartOperation}>
            Başla {error}
        </MainButton>
    );
};

export default StartOp;