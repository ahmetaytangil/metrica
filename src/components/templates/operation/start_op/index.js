import MainButton from "../../../UI/atoms/button/main_button";
import {create} from "../../../../store/api/create";
import {PATHS} from "../../../../store/api/paths";
import {useState} from "react";
import {storeLastWorks} from "../../../../store/last_works/last_works.slice";
import {connect} from "react-redux";
import {getLastWorksNoCond} from "../../../../utils/helpers";

const StartOp = (
    {
        setRunning,
        selected_work_order,
        user,
        disabled,
        last_works_data,
        storeLastWorksDis
    }
) => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleStartOperation = () => {
        if (!loading) {
            create()
                .post(PATHS.start_operation(
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
                .catch(e => setError(e.message))
        }
    }

    return (
        <MainButton
            icon="fa-play"
            onClick={handleStartOperation}
            disabled={disabled}
        >
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

export default connect(mapStateToProps, mapDispatchToProps)(StartOp);