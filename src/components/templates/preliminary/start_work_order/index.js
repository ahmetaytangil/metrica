import MainButton from "../../../UI/atoms/button/main_button";
import {useEffect, useState} from "react";
import {create} from "../../../../store/api/create";
import {PATHS} from "../../../../store/api/paths";
import useStoreFetcher from "../../../../hooks/useStoreFetcher";

const StartWorkOrder = ({setRunning, selected_work_order, user, currentCTime}) => {
    const [cTime, setCtime] = useState(null)
    const [error, setError] = useState("");

    useStoreFetcher(
        cTime,
        setCtime,
        PATHS.c_time(
            selected_work_order.material,
            selected_work_order.business_center,
            selected_work_order.operation,
            user.machine_no
        )
    )

    useEffect(() => {
        if (cTime) {
            currentCTime(cTime)
        }
    }, [cTime])

    const handleClick = () => {
        create()
            .post(PATHS.start_preliminary(
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
            .catch(e => setError(e.response.data.message || e.message))
    }

    return (
        <MainButton icon="fa-play" onClick={handleClick}>
            Başla {error}
        </MainButton>
    );
};

export default StartWorkOrder;