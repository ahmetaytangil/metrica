import useStopWatch from "../../../hooks/useStopWatch";
import {create} from "../../../store/api/create";
import {PATHS} from "../../../store/api/paths";
import {useState} from "react";

export default function useFault(selected_work_order, user, onRunningChange) {
    const [error,setError] = useState("")
    const {
        setRunning,
        time,
        running,
        setTime
    } = useStopWatch()

    const handleStartFault = (fault_id) => {
        create()
            .post(PATHS.start_fault(
                selected_work_order.order,
                selected_work_order.broadcasting,
                selected_work_order.queue,
                selected_work_order.operation_no,
                user.machine_no,
                user.id_no,
                fault_id
            ))
            .then(result => {
                if (result.status === 200) {
                    setRunning(true);
                }
            })
            .catch(e => setError(e.message))
    }

    const handleEndFault = () => {
        create()
            .post(PATHS.stop_fault(user.machine_no))
            .then(async result => {
                if (result.status === 200) {
                    await setRunning(false);
                    await setTime(0);
                    await onRunningChange(0)
                }
            })
            .catch(e => setError(e.message))
    }

    return {
        setRunning,
        time,
        running,
        setTime,
        error,
        handleStartFault,
        handleEndFault
    }
}