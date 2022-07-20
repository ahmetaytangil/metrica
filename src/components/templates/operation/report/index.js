import FormGroups from "../../../UI/molecules/form_groups";
import ModalOpener from "../../../UI/molecules/modal_opener";
import {create} from "../../../../store/api/create";
import {PATHS} from "../../../../store/api/paths";
import {useState} from "react";
import {storeLastWorks} from "../../../../store/last_works/last_works.slice";
import {connect} from "react-redux";
import {getLastWorksNoCond} from "../../../../utils/helpers";

const Report = (
    {
        user,
        selected_work_order,
        setRunning,
        setTime,
        disabled,
        last_works_data,
        storeLastWorksDis,
        saglam,
        hurda,
        exrat
    }
) => {
    const [error, setError] = useState("");
    const [solidPiece, setSolidPiece] = useState(" ");
    const [scrapPieces, setScrapPieces] = useState(" ");
    const [showDeneme, setShowDeneme] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleReport = () => {
        if (!loading) {
            const T = Number(saglam) + Number(hurda)
            const B = Number(solidPiece) + Number(scrapPieces)
            if (T < B) {
                setError("Bitirilen Adetten fazla raporlama yapılamaz")
            } else if (T === 0) {
                setError("Lütfen Değer Giriniz")
            } else {
                create()
                    .post(PATHS.raport_operation(
                        selected_work_order.order,
                        selected_work_order.broadcasting,
                        selected_work_order.queue,
                        user.id_no,
                        selected_work_order.operation_no,
                        solidPiece,
                        scrapPieces,
                        user.machine_no,
                        "00:00:00"
                    ))
                    .then(async result => {
                        if (result.status === 200) {
                            setRunning(false)
                            setTime(0)
                            getLastWorksNoCond(
                                selected_work_order,
                                last_works_data,
                                setLoading,
                                storeLastWorksDis,
                                setError
                            )
                            exrat()
                        }
                    })
                    .finally(() => setShowDeneme(false))
            }
        }

    }

    return (
        <ModalOpener
            modal_title="OPERASYON RAPORLA"
            button_text="RAPORLA"
            button_icon="fa-file"
            onAction={handleReport}
            showBew={showDeneme}
            setShowBew={setShowDeneme}
            disabled={disabled}
        >
            <form className="form-horizontal auth-form my-4">
                <p style={{color: 'red', fontSize: 20, textAlign: 'center'}}>{error}</p>
                <FormGroups
                    label="RAPORLANACAK SAĞLAM ADET"
                    onChange={(e) => setSolidPiece(e.target.value)}
                    type="number"
                    min={0}
                    max={saglam}
                />
                <FormGroups
                    label="RAPORLANACAK FİRE ADET"
                    onChange={(e) => setScrapPieces(e.target.value)}
                    type="number"
                    min={0}
                    max={hurda}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(Report);
