import {useEffect, useState} from "react";
import {PATHS} from "../../../store/api/paths";
import {get} from "../../../store/api/get";
import {lastWorksModel} from "../../../modelling/last_works";

export default function useLastWorks(selected_work_order) {
    const [lastWorks, setLastWorks] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (selected_work_order && !lastWorks) {
            setLoading(true);
            get(
                PATHS.last_works(
                    selected_work_order?.order,
                    selected_work_order?.broadcasting,
                    selected_work_order?.queue,
                    selected_work_order?.operation_no
                ),
                (data) => setLastWorks(lastWorksModel(data)),
                setError,
                setLoading(false)
            );
        }
    }, [selected_work_order])

    return {loading, lastWorks, error}
}