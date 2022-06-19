import SelectWorkOrder from "./select_work_order";
import StartWorkOrder from "./start_work_order";
import EndWorkOrder from "./end_work_order";
import Mcard from "../../UI/organisms/Mcard";

const Preliminary = () => {
    return (
        <Mcard headers={[
            {
                head: "ÖN HAZIRLIK",
                items: [
                    {title: "F874132-54-5"},
                    {title: "PP03*3P27240 - P27240 PLANET DİŞLİ"}
                ]
            },
            {
                items: [
                    {title: "İŞ EMRİ ADETİ: 1000"},
                    {title: "EN KISA SÜRE: 01.01.01"}
                ]
            }
        ]}>
            <SelectWorkOrder />
            <StartWorkOrder />
            <EndWorkOrder />
        </Mcard>
    );
};

export default Preliminary;