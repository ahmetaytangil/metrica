import React from 'react';
import Mcard from "../../UI/organisms/Mcard";
import StartFault from "./start_fault";
import EndFault from "./end_fault";
import {connect} from "react-redux";
import useFault from "./useFault";
import {storeSelectedWorkOrder,} from "../../../store/work_order/work_order.slice";
import {setWhichIsRunning} from "../../../store/conditions/conditions.slice";
import {storeLastWorks} from "../../../store/last_works/last_works.slice";

const Fault = (
    {
        user,
        selected_work_order,
        store,
        work_order_list,
        last_works_data,
        whichIsRunning
    }
) => {
    const {
        time,
        running,
        error,
        handleStartFault,
        handleEndFault,
        show,
        setShow
    } = useFault(
        selected_work_order,
        user,
        store.onRunningChange,
        work_order_list,
        store,
        last_works_data
    )

    return (
        <Mcard
            time={time}
            headers={[{head: "ARIZA/DURUŞ"}, {items: []}]}
        >
            <p>{error}</p>
            <StartFault
                handleStartFault={handleStartFault}
                disabled={!selected_work_order}
                showBew={show}
                setShowBew={setShow}
            />
            <EndFault
                handleEndFault={handleEndFault}
                disabled={!running}
            />
        </Mcard>
    );
};

const mapStateToProps = (state) => ({
    selected_work_order: state.work_order.selected,
    user: state.auth.user,
    whichIsRunning: state.conditions.which_is_running,
    last_works_data: state.last_works.data
})

const mapDispatchToProps = (dispatch) => ({
    store: {
        storeSelectedWorkOrderDis: (data) => dispatch(storeSelectedWorkOrder(data)),
        onRunningChange: (num) => dispatch(setWhichIsRunning(num)),
        storeLastWorksDis: (data) => dispatch(storeLastWorks(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Fault);