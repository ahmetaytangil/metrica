import React from 'react';
import {Modal} from "react-bootstrap";
import Button from "../atoms/button";

const KalanAdetPopup = ({show, onHide, children}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={onHide}
                    sx={{width: '50%', display: 'block', margin: 'auto'}}
                >
                    Anladım
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default KalanAdetPopup;