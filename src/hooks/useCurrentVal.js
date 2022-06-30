import useStoreFetcher from "./useStoreFetcher";
import {useEffect, useState} from "react";

export default function useCurrentVal(selected_work_order, work_order_list, store, setTime, user, path, setRunning) {
    const [currentPre, setCurrentPre] = useState(null)

    useStoreFetcher(
        currentPre,
        (data) => setCurrentPre(data?.filter(f => f.KIMLIK_NO === user.id_no)?.filter(f => f.DURUM === "0") || []),
        path
    );

    useEffect(() => {
        if (currentPre?.length > 0 && !selected_work_order && work_order_list) {
            const select = work_order_list?.filter(f => f.order === currentPre[0]?.ISEMRI)[0] || null

            if (select) {
                const endDate = new Date(currentPre[0]?.BASLANGIC_TARIHI).getTime()
                const currentDate = new Date().getTime()
                const diffInMs = currentDate - endDate

                setTime(diffInMs)
                setRunning(true)
                store.storeSelectedWorkOrderDis(select);
            }
        }
    }, [currentPre, work_order_list, selected_work_order])

    return {
        currentPre,
        setCurrentPre
    }
}