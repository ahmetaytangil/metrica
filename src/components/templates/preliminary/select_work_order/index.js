import ModalOpener from "../../../UI/molecules/modal_opener";
import Mtable from "../../../UI/organisms/Mtable";
import {storeSelectedWorkOrder} from "../../../../store/work_order/work_order.slice";
import {connect} from "react-redux";

const SelectWorkOrder = (
    {
        selected_work_order,
        storeSelected,
        table_list,
        disabled
    }
) => {

    return (
        <ModalOpener
            button_text="İŞ EMRİ SEÇ"
            modal_title="İŞ EMRİ SEÇ"
            button_icon="fa-hand-pointer"
            onAction="close-modal"
            disabled={disabled}
        >
            <Mtable
                title="SON İŞLER"
                onClick={storeSelected}
                selected_work_order={selected_work_order}
                heads={[
                    {text: "ÖNCELİK"},
                    {text: "İŞ MERKEZİ"},
                    {text: "MALZEME"},
                    {text: "TEZGAH"},
                    {text: "İŞ MERKEZİ 1"},
                    {text: "OPERASYON"},
                    {text: "İŞ EMRI ADETİ"},
                    {text: "MÜSTERİ ADET"},
                    {text: "REDÜKTÖR TESLiM"},
                    {text: "BEKLEME SAAT"},
                    {text: "BÖLÜMÜ"},
                    {text: "SİPARİŞ"},
                    {text: "YAYIN"},
                    {text: "SIRA"},
                    {text: "OPERASYON NO"}
                ]}
                bodies={table_list?.map(list => {
                    return {
                        that: list,
                        items: [
                            {text: list.priority},
                            {text: list.business_center},
                            {text: list.material},
                            {text: list.stand},
                            {text: list.business_center_2},
                            {text: list.operation},
                            {text: list.number_of_work_orders},
                            {text: list.number_of_customers},
                            {text: list.reducer_delivery},
                            {text: list.waiting_time},
                            {text: list.section},
                            {text: list.order},
                            {text: list.broadcasting},
                            {text: list.queue},
                            {text: list.operation_no},
                        ]
                    }
                })}
            />
        </ModalOpener>
    );
};

const mapStateToProps = (state) => ({
    selected_work_order: state.work_order.selected,
})

const mapDispatchToProps = (dispatch) => ({
    storeSelected: (data) => dispatch(storeSelectedWorkOrder(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectWorkOrder);