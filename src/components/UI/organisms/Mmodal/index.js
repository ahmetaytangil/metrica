import {Modal} from "react-bootstrap";
import Button from "../../atoms/button";
import {card_styles} from "../../../../constants/class_names";

const {
    m_modal
} = card_styles

const Mmodal = ({show, onHide, onAction, children, title, footer, noStart}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
        >
            <Modal.Header style={m_modal.header}>
                <Modal.Title style={m_modal.title}>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            {footer !== "none" &&
                <Modal.Footer>
                    <div className="d-flex align-items-center w-100">
                        {!noStart &&
                            <Button
                                onClick={onAction === "close-modal" ? onHide : onAction}
                                sx={{width: '50%', display: 'block'}}
                            >
                                BİTİR
                            </Button>
                        }
                        <Button
                            onClick={onHide}
                            sx={{width: noStart ? "100%" : '50%', display: 'block'}}
                        >
                            İptal
                        </Button>
                    </div>
                </Modal.Footer>
            }
        </Modal>
    );
};

export default Mmodal;