import SelectWorkOrder from "./select_work_order";
import StartWorkOrder from "./start_work_order";
import EndWorkOrder from "./end_work_order";
import Mcard from "../../UI/organisms/Mcard";
import usePreliminary from "./usePreliminary";
import {connect} from "react-redux";
import {
    storeSelectedWorkOrder,
    storeWorkOrderList
} from "../../../store/work_order/work_order.slice";
import {useEffect, useState} from "react";
import {setWhichIsRunning} from "../../../store/conditions/conditions.slice";

const Preliminary = (
    {
        work_order_list,
        store,
        user,
        selected_work_order,
        whichIsRunning
    }
) => {
    const [currentCTime, setCurrentCTime] = useState(null)
    const {
        loading,
        setRunning,
        time,
        running,
        setTime
    } = usePreliminary(
        work_order_list,
        store,
        user,
        selected_work_order
    );

    useEffect(() => {
        if (running) {
            store.onRunningChange(1)
        }
    }, [running])

    return !loading ? (
        <Mcard time={time} headers={[
            {
                head: "ÖN HAZIRLIK",
                items: [
                    {title: selected_work_order ? `${selected_work_order.order}-${selected_work_order.broadcasting}-${selected_work_order.queue}` : ""},
                    {title: selected_work_order ? `${selected_work_order.material}` : ""}
                ]
            },
            {
                items: [
                    {title: `İŞ EMRİ ADETİ: ${selected_work_order?.number_of_work_orders || "0"}`},
                    {title: `EN KISA SÜRE: ${currentCTime && currentCTime[0].MIN_MK || "0"}`}
                ]
            }
        ]}>
            <SelectWorkOrder
                table_list={work_order_list}
                disabled={running || whichIsRunning !== 0}
            />
            {selected_work_order &&
                <>
                    <StartWorkOrder
                        setRunning={setRunning}
                        selected_work_order={selected_work_order}
                        user={user}
                        currentCTime={setCurrentCTime}
                        disabled={!selected_work_order || running || (whichIsRunning !== 0 && whichIsRunning !== 1)}
                    />
                    <EndWorkOrder
                        setRunning={setRunning}
                        selected_work_order={selected_work_order}
                        user={user}
                        setTime={setTime}
                        onRunningChange={store.onRunningChange}
                        disabled={running === false}
                    />
                </>
            }
        </Mcard>
    ) : null;
};

const mapStateToProps = (state) => ({
    work_order_list: state.work_order.list,
    selected_work_order: state.work_order.selected,
    user: state.auth.user
})

const mapDispatchToProps = (dispatch) => ({
    store: {
        storeWorkOrderListDis: (data) => dispatch(storeWorkOrderList(data)),
        storeSelectedWorkOrderDis: (data) => dispatch(storeSelectedWorkOrder(data)),
        onRunningChange: (num) => dispatch(setWhichIsRunning(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Preliminary);