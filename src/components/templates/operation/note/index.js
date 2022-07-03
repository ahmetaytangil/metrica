import React from 'react';
import ModalOpener from "../../../UI/molecules/modal_opener";

const Note = ({disabled}) => {
    return (
        <ModalOpener
            modal_title="NOT GİR"
            button_text="NOT GİR"
            button_icon="fa-pied-piper-hat"
            disabled={disabled}
        >
            <form className="form-horizontal auth-form my-4">
                <label style={{fontSize: 24}}>NOT GİR</label>
                <textarea className="form-control rounded-0">{/**/}</textarea>
            </form>
        </ModalOpener>
    );
};

export default Note;