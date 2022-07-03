import React, {useState} from 'react';
import ModalOpener from "../../../UI/molecules/modal_opener";
import MainButton from "../../../UI/atoms/button/main_button";
import {Col, Row} from "react-bootstrap";
import useStoreFetcher from "../../../../hooks/useStoreFetcher";
import {PATHS} from "../../../../store/api/paths";

const buttonStyles = {
    padding: "10px",
    width: '100%',
    height: "100px",
    textAlign: "center",
    fontSize: "16px",
    marginBottom: '20px'
}

const StartFault = (
    {
        handleStartFault,
        disabled,
        showBew,
        setShowBew
    }
) => {
    const [faultList, setFaultList] = useState(null);
    const {loading} = useStoreFetcher(
        faultList,
        setFaultList,
        PATHS.fault_list
    )

    const buttons = faultList?.map(list => {
        return {
            id: list.ARIZA_DURUS_KOD || null,
            name: list.ARIZA_DURUS_ADI || null
        }
    }) || null

    return (
        <ModalOpener
            modal_title="ARIZA SEÇ"
            button_text="BAŞLA"
            button_icon="fa-play"
            footer="none"
            disabled={disabled}
            showBew={showBew}
            setShowBew={setShowBew}
        >
            {!loading &&
                <Row>
                    {buttons?.map(button => (
                        <Col md={3} key={button.id}>
                            {button.name &&
                                <MainButton
                                    sx={buttonStyles}
                                    onClick={() => handleStartFault(button.id)}
                                >
                                    {button.name}
                                </MainButton>
                            }
                        </Col>
                    ))}
                </Row>
            }
        </ModalOpener>
    );
};

export default StartFault;