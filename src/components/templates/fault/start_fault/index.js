import React from 'react';
import ModalOpener from "../../../UI/molecules/modal_opener";
import MainButton from "../../../UI/atoms/button/main_button";
import {Col, Row} from "react-bootstrap";
import {makeId} from "../../../../utils/helpers";

const buttonStyles = {padding: "10px", width: '100%', height: "100px", textAlign: "center", fontSize: "16px", marginBottom: '20px'}



const StartFault = () => {
    const buttons = [
        {name: "BOR YAĞI EKLEME"},
        {name: "ÇAKI DEĞİŞTİRME"},
        {name: "ELEKTRİK KESİNTİSİ"},
        {name: "ELEKTRONİK ARIZA"},
        {name: "APARAT ARIZASI"},
        {name: "GÖZ ARIZASI"},
        {name: "İHTİYAÇ MOLASI"},
        {name: "MEKANİK ARIZA"},
        {name: "PT001 DİŞLİ TEKRAR"},
        {name: "PT003 DİŞLİ TEKRAR"},
        {name: "SIKI PARÇA TEKRARI"},
        {name: "TALAŞ TEMİZLEME"},
        {name: "UÇ DEĞİŞİMİ / TAKIM TELAFİSİ"},
        {name: "YEMEK MOLASI"},
        {name: "YENİ TAŞ YAPMA"},
    ]

    return (
        <ModalOpener
            modal_title="ARIZA SEÇ"
            button_text="BAŞLA"
            button_icon="fa-play"
            footer="none"
        >
            <Row>
                {buttons.map(button => (
                    <Col md={3} key={makeId()}>
                        <MainButton sx={buttonStyles}>
                            {button.name}
                        </MainButton>
                    </Col>
                ))}
            </Row>
        </ModalOpener>
    );
};

export default StartFault;