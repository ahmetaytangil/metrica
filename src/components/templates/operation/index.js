import Mcard from "../../UI/organisms/Mcard";
import StartOp from "./start_op";
import EndOp from "./end_op";
import Report from "./report";
import {connect} from "react-redux";
import useStopWatch from "../../../hooks/useStopWatch";
import {useEffect, useState} from "react";
import {storeSelectedWorkOrder} from "../../../store/work_order/work_order.slice";
import useCurrentVal from "../../../hooks/useCurrentVal";
import {PATHS} from "../../../store/api/paths";
import {setWhichIsRunning} from "../../../store/conditions/conditions.slice";
import Mdk from "./mdk";
import Note from "./note";
import {create} from "../../../store/api/create";

const Operation = (
    {
        user,
        store,
        selected_work_order,
        work_order_list,
        whichIsRunning
    }
) => {
    const [saglamHurda, setSaglamHurda] = useState(null);
    const {
        setRunning,
        time,
        running,
        setTime
    } = useStopWatch();

    const {currentPre, setCurrentPre} = useCurrentVal(
        selected_work_order,
        work_order_list,
        store,
        setTime,
        user,
        PATHS.current_operation(user.machine_no),
        setRunning
    )

    useEffect(() => {
        if (selected_work_order) {
            create()
                .get(PATHS.saglam_hurda(
                    selected_work_order?.order,
                    selected_work_order?.broadcasting,
                    selected_work_order?.queue,
                    selected_work_order?.operation_no,
                    user.id_no,
                    user.machine_no,
                    "1"
                ))
                .then(result => {
                    if (result.status === 200) {
                        setSaglamHurda(result.data)
                    }
                })
        }

    }, [selected_work_order, running])

    useEffect(() => {
        if (running) {
            store.onRunningChange(2)
        }
    }, [running])

    let kalan_adet = "KALAN ADET: " + (saglamHurda ? (String(Number(selected_work_order?.number_of_work_orders) - (Number(saglamHurda[0]?.SAGLAM) + Number(saglamHurda[0]?.HURDA)))) : "-")

    return (
        <Mcard time={time} headers={[
            {
                head: "OPERASYON",
                items: [
                    {title: `${selected_work_order?.business_center_2 || ""} - ${selected_work_order?.operation || ""}` }
                ]
            },
            {
                items: [
                    {title: kalan_adet},
                    {title: "BİTEN SAĞLAM: " + (saglamHurda && saglamHurda[0]?.SAGLAM || "-")},
                    {title: "BİTEN FİRE: " + (saglamHurda && saglamHurda[0]?.HURDA || "-")},
                    {title: "RAPORLANAN ADET: " + (saglamHurda && saglamHurda[0]?.RAPORLANAN_ADET || "-")}
                ]
            }
        ]}>
            <StartOp
                user={user}
                setRunning={setRunning}
                selected_work_order={selected_work_order}
                disabled={!selected_work_order || running || (whichIsRunning !== 0 && whichIsRunning !== 2)}
            />
            <EndOp
                user={user}
                setRunning={setRunning}
                selected_work_order={selected_work_order}
                setTime={setTime}
                onRunningChange={store.onRunningChange}
                currentPre={currentPre}
                setCurrentPre={setCurrentPre}
                disabled={running === false}
            />
            <Report
                user={user}
                selected_work_order={selected_work_order}
                setRunning={setRunning}
                setTime={setTime}
                disabled={!selected_work_order}
            />
            <Mdk disabled={true}/>
            <Note disabled={true}/>
        </Mcard>
    );
};

const mapStateToProps = (state) => ({
    selected_work_order: state.work_order.selected,
    user: state.auth.user,
    work_order_list: state.work_order.list,
    whichIsRunning: state.conditions.which_is_running
})

const mapDispatchToProps = (dispatch) => ({
    store: {
        storeSelectedWorkOrderDis: (data) => dispatch(storeSelectedWorkOrder(data)),
        onRunningChange: (num) => dispatch(setWhichIsRunning(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Operation);