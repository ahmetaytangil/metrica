import React from 'react';
import FormGroups from "../../../UI/molecules/form_groups";
import ModalOpener from "../../../UI/molecules/modal_opener";

const Mdk = ({disabled}) => {
    return (
        <ModalOpener
            modal_title="MDK GİR"
            button_text="MDK"
            button_icon="fa-hand-pointer"
            disabled={disabled}
        >
            <form className="form-horizontal auth-form my-4">
                <FormGroups label="ŞÜPHELİ MALZEME ADET" />
                <FormGroups label="ŞÜPHELİ MALZEME NEDENİ" />
                <FormGroups label="İŞ EMRİ" />
                <FormGroups label="STOK NUMARASI" />
                <FormGroups label="OPERATÖR" />
            </form>
        </ModalOpener>
    );
};

export default Mdk;