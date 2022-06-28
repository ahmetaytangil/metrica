import MainButton from "../atoms/button/main_button";
import Mmodal from "../organisms/Mmodal";
import {useState} from "react";

const ModalOpener = ({children, button_text, button_icon, modal_title, footer, onAction}) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <MainButton
                icon={button_icon}
                onClick={() => setShow(true)}
            >
                {button_text}
            </MainButton>
            {children &&
                <Mmodal
                    show={show}
                    onHide={() => setShow(false)}
                    title={modal_title}
                    footer={footer}
                    onAction={onAction}
                >
                    {children}
                </Mmodal>
            }
        </>
    );
};

export default ModalOpener;