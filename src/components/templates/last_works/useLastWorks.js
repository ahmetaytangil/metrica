import {useEffect, useState} from "react";
import {getLastWorks} from "../../../utils/helpers";

export default function useLastWorks(
    selected_work_order,
    last_works_data,
    storeLastWorksDis
) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getLastWorks(
            selected_work_order,
            last_works_data,
            setLoading,
            storeLastWorksDis,
            setError
        );
    }, [selected_work_order])

    return {loading, error}
}