import Mtable from "../../UI/organisms/Mtable";
import {connect} from "react-redux";
import useLastWorks from "./useLastWorks";
import {storeLastWorks} from "../../../store/last_works/last_works.slice";

const LastWorks = (
    {
        selected_work_order,
        last_works_data,
        storeLastWorksDis
    }
) => {
    const {loading} = useLastWorks(
        selected_work_order,
        last_works_data,
        storeLastWorksDis
    );

    return !loading && last_works_data ? (
        <Mtable
            title="SON İŞLER"
            selected_work_order={0}
            heads={[
                {text: "TİP"},
                {text: "İŞ EMRİ"},
                {text: "YAYIN"},
                {text: "SIRA"},
                {text: "KİMLİK NO"},
                {text: "SAĞLAM"},
                {text: "HURDA"},
                {text: "AKTİF KESME SÜRESİ"},
                {text: "BAŞLANGIÇ TARİHİ"},
                {text: "DURUM"},
            ]}
            bodies={last_works_data?.map(last => {
                const date = new Date(last.starting_date).toLocaleString('tr-TR')
                return {
                    items: [
                        {text: last.type},
                        {text: last.work_order},
                        {text: last.broadcasting},
                        {text: last.queue},
                        {text: last.id_no},
                        {text: last.solid},
                        {text: last.scrap},
                        {text: last.active_cutting_time},
                        {text: date},
                        {text: String(last.status)},
                    ]
                }
            }) || null}
        />
    ) : null;
};

const mapStateToProps = (state) => ({
    selected_work_order: state.work_order.selected,
    last_works_data: state.last_works.data
})

const mapDispatchToProps = (dispatch) => ({
    storeLastWorksDis: (data) => dispatch(storeLastWorks(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LastWorks);