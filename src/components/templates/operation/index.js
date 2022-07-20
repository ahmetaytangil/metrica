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
import {
    setOperationRunning,
    setPreliminaryRunning,
    setWhichIsRunning
} from "../../../store/conditions/conditions.slice";
import Mdk from "./mdk";
import Note from "./note";
import {create} from "../../../store/api/create";
import KalanAdetPopup from "../../UI/molecules/kalan_adet_popup";

function getKalanAdet(saglamHurda, selected_work_order) {
    return "KALAN ADET: " + (saglamHurda
            ? (String(Number(selected_work_order?.number_of_work_orders) - (Number(saglamHurda[0]?.SAGLAM) + Number(saglamHurda[0]?.HURDA))))
            : "-"
    );
}

function getKalanAdetNumber(saglamHurda, selected_work_order) {
    return saglamHurda ? Number(selected_work_order?.number_of_work_orders) - (Number(saglamHurda[0]?.SAGLAM) + Number(saglamHurda[0]?.HURDA)) : selected_work_order?.number_of_work_orders
}

const Operation = (
    {
        user,
        store,
        selected_work_order,
        work_order_list,
        whichIsRunning,
        running
    }
) => {
    const [saglamHurda, setSaglamHurda] = useState(null);
    const {time, setTime} = useStopWatch(running);
    const [showKalanPopup, setShowKalanPopup] = useState(false);

    const {currentPre, setCurrentPre} = useCurrentVal(
        selected_work_order,
        work_order_list,
        store,
        setTime,
        user,
        PATHS.current_operation(user.machine_no),
        store.setRunning
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

    let kalan_adet = getKalanAdet(saglamHurda, selected_work_order)

    return (
        <Mcard time={time} headers={[
            {
                head: "OPERASYON",
                items: [
                    {title: `${selected_work_order?.business_center_2 || ""} - ${selected_work_order?.operation || ""}`}
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
                setRunning={store.setRunning}
                selected_work_order={selected_work_order}
                disabled={!selected_work_order || running || (whichIsRunning !== 0 && whichIsRunning !== 2)}
            />
            <EndOp
                user={user}
                setRunning={store.setRunning}
                selected_work_order={selected_work_order}
                setTime={setTime}
                onRunningChange={store.onRunningChange}
                currentPre={currentPre}
                setCurrentPre={setCurrentPre}
                disabled={running === false}
                onShowKalan={() => setShowKalanPopup(true)}
                kalan_adet={getKalanAdetNumber(saglamHurda, selected_work_order)}
            />
            <Report
                user={user}
                selected_work_order={selected_work_order}
                setRunning={store.setRunning}
                setTime={setTime}
                disabled={!selected_work_order}
                saglam={saglamHurda && saglamHurda[0]?.SAGLAM}
                hurda={saglamHurda && saglamHurda[0]?.HURDA}
            />
            <Mdk disabled={true}/>
            <Note disabled={true}/>
            <KalanAdetPopup
                show={showKalanPopup}
                onHide={() => setShowKalanPopup(false)}
            >
                <p style={{fontSize: 20, textAlign: 'center', fontWeight: 700}}>{kalan_adet}</p>
            </KalanAdetPopup>
        </Mcard>
    );
};

const mapStateToProps = (state) => ({
    selected_work_order: state.work_order.selected,
    user: state.auth.user,
    work_order_list: state.work_order.list,
    whichIsRunning: state.conditions.which_is_running,
    running: state.conditions.operation_running
})

const mapDispatchToProps = (dispatch) => ({
    store: {
        storeSelectedWorkOrderDis: (data) => dispatch(storeSelectedWorkOrder(data)),
        onRunningChange: (num) => dispatch(setWhichIsRunning(num)),
        setRunning: (bool) => dispatch(setOperationRunning(bool))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Operation);