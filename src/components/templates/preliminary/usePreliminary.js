import useStoreFetcher from "../../../hooks/useStoreFetcher";
import {PATHS} from "../../../store/api/paths";
import useStopWatch from "../../../hooks/useStopWatch";
import useCurrentVal from "../../../hooks/useCurrentVal";

export default function usePreliminary(
    work_order_list,
    store,
    user,
    selected_work_order,
    running
) {
    const {time, setTime} = useStopWatch(running)

    const {loading} = useStoreFetcher(
        work_order_list,
        store.storeWorkOrderListDis,
        PATHS.work_order_filter(
            user.section,
            "%25",
            user.business_center,
            user.machine_no
        )
    );

    useCurrentVal(
        selected_work_order,
        work_order_list,
        store,
        setTime,
        user,
        PATHS.current_preliminary(user.machine_no),
        store.setRunning
    )

    return {
        loading,
        time,
        setTime
    }
}