import MainButton from "../atoms/button/main_button";
import Mmodal from "../organisms/Mmodal";
import {useState} from "react";

const ModalOpener = (
    {
        children,
        button_text,
        button_icon,
        modal_title,
        footer,
        onAction,
        showBew,
        setShowBew,
        disabled
    }
) => {
    const [show, setShow] = useState(false);


    return (
        <>
            <MainButton
                disabled={disabled}
                icon={button_icon}
                onClick={() => setShowBew
                    ? setShowBew(true)
                    : setShow(true)
                }
                style={disabled ? {
                    color: "#00044454",
                    backgroundColor: "transparent",
                    borderColor: "#00044454"
                } : {
                    color: "#fff",
                    backgroundColor: "transparent",
                    borderColor: "#fff"
                }}
            >
                {button_text}
            </MainButton>
            {children &&
                <Mmodal
                    show={showBew ? showBew : show}
                    onHide={() => setShowBew
                        ? setShowBew(false)
                        : setShow(false)
                    }
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