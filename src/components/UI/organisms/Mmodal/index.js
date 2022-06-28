import {Modal} from "react-bootstrap";
import Button from "../../atoms/button";
import {card_styles} from "../../../../constants/class_names";

const {
    m_modal
} = card_styles

const Mmodal = ({show, onHide, onAction, children, title, footer}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >
            <Modal.Header style={m_modal.header} closeButton>
                <Modal.Title style={m_modal.title}>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            {footer !== "none" &&
                <Modal.Footer>
                    <Button onClick={onAction === "close-modal" ? onHide : onAction} sx={{width: '100%'}}>
                        BİTİR
                    </Button>
                </Modal.Footer>
            }
        </Modal>
    );
};

export default Mmodal;