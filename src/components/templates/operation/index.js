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

const Operation = (
    {
        selected_work_order,
        user,
        onRunningChange,
        whichIsRunning,
        store,
        work_order_list
    }
) => {
    const [ended, setEnded] = useState(false);
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
        if (running) {
            onRunningChange(2)
        }
    }, [running])

    return (
        <Mcard name="02" time={time} headers={[
            {
                head: "OPERASYON",
                items: [
                    {title: "PT0-110 - PT0-110"}
                ]
            },
            {
                items: [
                    {title: "KALAN ADET: 1000"},
                    {title: "BİTEN SAĞLAM: 400"},
                    {title: "BİTEN FİRE: 3"},
                    {title: "RAPORLANAN ADET: 200"}
                ]
            }
        ]}>
            {(selected_work_order && (whichIsRunning === 0 || whichIsRunning === 2)) &&
                <>
                    {(running && !ended) ?
                        <EndOp
                            user={user}
                            setRunning={setRunning}
                            selected_work_order={selected_work_order}
                            setTime={setTime}
                            setEnded={setEnded}
                            onRunningChange={onRunningChange}
                            currentPre={currentPre}
                            setCurrentPre={setCurrentPre}
                        />
                        :
                        !ended &&
                        <StartOp
                            user={user}
                            setRunning={setRunning}
                            selected_work_order={selected_work_order}
                        />
                    }
                    {/*<Mdk />*/}
                    {ended &&
                        <>
                            <EndOp
                                user={user}
                                setRunning={setRunning}
                                selected_work_order={selected_work_order}
                                setTime={setTime}
                                setEnded={setEnded}
                                onRunningChange={onRunningChange}
                                currentPre={currentPre}
                                setCurrentPre={setCurrentPre}
                                allreset={true}
                            />
                            <Report
                                user={user}
                                selected_work_order={selected_work_order}
                                setEnded={setEnded}
                                setRunning={setRunning}
                                setTime={setTime}
                            />
                        </>
                    }
                    {/*<Note />*/}
                </>
            }
        </Mcard>
    );
};

const mapStateToProps = (state) => ({
    selected_work_order: state.work_order.selected,
    user: state.auth.user,
    work_order_list: state.work_order.list
})

const mapDispatchToProps = (dispatch) => ({
    store: {
        storeSelectedWorkOrderDis: (data) => dispatch(storeSelectedWorkOrder(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Operation);