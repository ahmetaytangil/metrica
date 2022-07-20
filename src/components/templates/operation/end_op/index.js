import ModalOpener from "../../../UI/molecules/modal_opener";
import FormGroups from "../../../UI/molecules/form_groups";
import {useState} from "react";
import {create} from "../../../../store/api/create";
import {PATHS} from "../../../../store/api/paths";
import {storeLastWorks} from "../../../../store/last_works/last_works.slice";
import {connect} from "react-redux";
import {getLastWorksNoCond} from "../../../../utils/helpers";

const EndOp = (
    {
        user,
        setRunning,
        selected_work_order,
        setTime,
        onRunningChange,
        disabled,
        setCurrentPre,
        last_works_data,
        storeLastWorksDis,
        onShowKalan,
        kalan_adet
    }
) => {
    const [error, setError] = useState("");
    const [activeCuttingTime, setActiveCuttingTime] = useState("");
    const [solidPiece, setSolidPiece] = useState("");
    const [scrapPieces, setScrapPieces] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleStopOperation = () => {
        console.log(kalan_adet)
        console.log(scrapPieces)
        console.log(solidPiece)
        console.log(Number(kalan_adet) < (Number(solidPiece) + Number(scrapPieces)))
        if (!loading) {
            if (Number(kalan_adet) < (Number(solidPiece) + Number(scrapPieces))) {
                setError("İŞ EMRİ DEĞERİNDEN FAZLA ADET RAPORLAYAMAZSINIZ")
            } else {
                create()
                    .post(PATHS.stop_operation(
                        solidPiece,
                        scrapPieces,
                        activeCuttingTime,
                        "0",
                        "1",
                        selected_work_order.order,
                        selected_work_order.broadcasting,
                        selected_work_order.queue,
                        selected_work_order.operation_no,
                        user.machine_no,
                        user.id_no
                    ))
                    .then(async result => {
                        if (result.status === 200) {
                            setRunning(false);
                            setTime(0)
                            onRunningChange(0);
                            setCurrentPre([])
                            setShow(false);
                            getLastWorksNoCond(
                                selected_work_order,
                                last_works_data,
                                setLoading,
                                storeLastWorksDis,
                                setError
                            );
                            onShowKalan();
                        }
                    })
                    .catch(e => setError(e.message))
            }

        }
    }

    return (
        <ModalOpener
            modal_title="OPERASYON BİTİR"
            button_text="BİTİR"
            button_icon="fa-stop"
            onAction={handleStopOperation}
            showBew={show}
            setShowBew={setShow}
            disabled={disabled}
        >
            <form className="form-horizontal auth-form my-4">
                <p style={{color: 'red', fontSize: 20, textAlign: 'center'}}>{error}</p>
                <FormGroups
                    label="AKTİF KESME SÜRESİ"
                    onChange={(e) => setActiveCuttingTime(e.target.value)}
                />
                <FormGroups label="SAĞLAM ADET" onChange={(e) => setSolidPiece(e.target.value)}/>
                <FormGroups label="FİRE ADET" onChange={(e) => setScrapPieces(e.target.value)}/>
            </form>
        </ModalOpener>
    );
};

const mapStateToProps = (state) => ({
    last_works_data: state.last_works.data
})

const mapDispatchToProps = (dispatch) => ({
    storeLastWorksDis: (data) => dispatch(storeLastWorks(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EndOp);
