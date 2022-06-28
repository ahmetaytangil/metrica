import React from 'react';
import Mcard from "../../UI/organisms/Mcard";
import StartFault from "./start_fault";
import EndFault from "./end_fault";
import {connect} from "react-redux";
import useFault from "./useFault";
import {useEffect} from "react";
import {PATHS} from "../../../store/api/paths";
import {storeSelectedWorkOrder,} from "../../../store/work_order/work_order.slice";
import useCurrentVal from "../../../hooks/useCurrentVal";

const Fault = (
    {
        user,
        whichIsRunning,
        onRunningChange,
        selected_work_order,
        store,
        work_order_list
    }
) => {
    const {
        time,
        running,
        error,
        handleStartFault,
        handleEndFault,
        setTime
    } = useFault(
        selected_work_order,
        user,
        onRunningChange
    )

    useEffect(() => {
        if (running) {
            onRunningChange(3)
        }
    }, [running]);

    useCurrentVal(
        selected_work_order,
        work_order_list,
        store,
        setTime,
        user,
        PATHS.current_fault(user.machine_no)
    )

    return (
        <Mcard time={time} headers={[{head: "ARIZA/DURUŞ"}, {items: []}]}>
            <p>{error}</p>
            {(whichIsRunning === 0 || whichIsRunning === 3) &&
                <>
                    {running ?
                        <EndFault handleEndFault={handleEndFault}/>
                        : selected_work_order &&
                        <StartFault handleStartFault={handleStartFault}/>
                    }
                </>
            }
        </Mcard>
    );
};

const mapStateToProps = (state) => ({
    selected_work_order: state.work_order.selected,
    user: state.auth.user,
    work_order_list: state.work_order.list,
})

const mapDispatchToProps = (dispatch) => ({
    store: {
        storeSelectedWorkOrderDis: (data) => dispatch(storeSelectedWorkOrder(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Fault);