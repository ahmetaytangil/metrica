import Mcard from "../../UI/organisms/Mcard";
import StartOp from "./start_op";
import EndOp from "./end_op";
import Mdk from "./mdk";
import Report from "./report";
import Note from "./note";

const Operation = () => {
    return (
        <Mcard headers={[
            {
                head: "OPERASYON",
                items: [
                    {title: "PT0-110 - PT0-110"}
                ]
            },
            {
                items: [
                    {title: "KALAN ADET: 1000"},
                    {title: "BİTEN SAĞLAM: 400"},
                    {title: "BİTEN FİRE: 3"},
                    {title: "RAPORLANAN ADET: 200"}
                ]
            }
        ]}>
            <StartOp />
            <EndOp />
            <Mdk />
            <Report />
            <Note />
        </Mcard>
    );
};

export default Operation;