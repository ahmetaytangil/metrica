import Mtable from "../../UI/organisms/Mtable";
import {connect} from "react-redux";
import useLastWorks from "./useLastWorks";

const LastWorks = ({selected_work_order}) => {
    const {loading, lastWorks} = useLastWorks(selected_work_order);

    console.log('lastWorks',lastWorks)

    return !loading && lastWorks ? (
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
                {text: "BİTİŞ TARİHİ"},
                {text: "DURUM"},
            ]}
            bodies={lastWorks?.map(last => {
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
                        {text: last.starting_date},
                        {text: last.ending_date},
                        {text: last.status},
                    ]
                }
            }) || null}
        />
    ) : null;
};

const mapStateToProps = (state) => ({
    selected_work_order: state.work_order.selected
})

export default connect(mapStateToProps)(LastWorks);