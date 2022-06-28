import useStoreFetcher from "./useStoreFetcher";
import {useEffect, useState} from "react";

export default function useCurrentVal(selected_work_order, work_order_list, store, setTime, user, path) {
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
                const endDate = new Date(currentPre[0]?.BASLANGIC_TARIHI)
                const currentDate = new Date()
                const diffInMs = Math.abs(currentDate - endDate)

                setTime(10)
                store.storeSelectedWorkOrderDis(select);
            }
        }
    }, [currentPre, work_order_list, selected_work_order])
}