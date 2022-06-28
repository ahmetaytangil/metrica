import React from 'react';
import Button from "../atoms/button";
import {topbarStyles} from "../../../constants/class_names";

const TopbarButtons = () => {
    return (
        <div className={topbarStyles.buttons}>
            <Button icon="fa-gear">
                TEKNİK RESİM
            </Button>
            <Button icon="fa-check">
                KALİTE KONTROL
            </Button>
        </div>
    );
};

export default TopbarButtons;