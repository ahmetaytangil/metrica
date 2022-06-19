import Mtable from "../../UI/organisms/Mtable";

const LastWorks = () => {
    return (
        <Mtable
            title="SON İŞLER"
            heads={[
                {text: "İŞ EMRİ"},
                {text: "STOK KODU"},
                {text: "SÜRE"},
                {text: "OPERATOR"}
            ]}
            bodies={[
                {
                    items: [
                        {text: "XXXX"},
                        {text: "XXXX"},
                        {text: "XXXX"},
                        {text: "XXXX"}
                    ]
                },
                {
                    items: [
                        {text: "XXXX"},
                        {text: "XXXX"},
                        {text: "XXXX"},
                        {text: "XXXX"}
                    ]
                },
                {
                    items: [
                        {text: "XXXX"},
                        {text: "XXXX"},
                        {text: "XXXX"},
                        {text: "XXXX"}
                    ]
                },
                {
                    items: [
                        {text: "XXXX"},
                        {text: "XXXX"},
                        {text: "XXXX"},
                        {text: "XXXX"}
                    ]
                }
            ]}
        />
    );
};

export default LastWorks;