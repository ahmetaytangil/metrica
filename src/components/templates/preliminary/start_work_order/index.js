import MainButton from "../../../UI/atoms/button/main_button";
import {useEffect, useState} from "react";
import {create} from "../../../../store/api/create";
import {PATHS} from "../../../../store/api/paths";
import useStoreFetcher from "../../../../hooks/useStoreFetcher";
import {getLastWorksNoCond} from "../../../../utils/helpers";
import {storeLastWorks} from "../../../../store/last_works/last_works.slice";
import {connect} from "react-redux";

const StartWorkOrder = (
    {
        setRunning,
        selected_work_order,
        user,
        currentCTime,
        disabled,
        last_works_data,
        storeLastWorksDis
    }
    ) => {
    const [cTime, setCtime] = useState(null)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useStoreFetcher(
        cTime,
        setCtime,
        PATHS.c_time(
            selected_work_order?.material,
            selected_work_order?.business_center,
            selected_work_order?.operation,
            user.machine_no
        )
    )

    useEffect(() => {
        if (cTime) {
            currentCTime(cTime)
        }
    }, [cTime])

    const handleClick = () => {
        if (!loading) {
            create()
                .post(PATHS.start_preliminary(
                    selected_work_order.order,
                    selected_work_order.broadcasting,
                    selected_work_order.queue,
                    selected_work_order.operation_no,
                    user.id_no,
                    user.machine_no
                ))
                .then(result => {
                    if (result.status === 200) {
                        setRunning(true);
                        getLastWorksNoCond(
                            selected_work_order,
                            last_works_data,
                            setLoading,
                            storeLastWorksDis,
                            setError
                        )
                    }
                })
                .catch(e => setError(e.response.data.message || e.message))
        }
    }

    return (
        <MainButton icon="fa-play" onClick={handleClick} disabled={disabled}>
            Başla {error}
        </MainButton>
    );
};

const mapStateToProps = (state) => ({
    last_works_data: state.last_works.data
})

const mapDispatchToProps = (dispatch) => ({
    storeLastWorksDis: (data) => dispatch(storeLastWorks(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(StartWorkOrder);
