import React from 'react';

const FormGroups = ({label, onChange, type = "text", min, max}) => {
    return (
        <div className="form-group" style={{fontSize: 24}}>
            <label>{label}</label>
            <div className="input-group mb-3">
                <input type={type} className="form-control" onChange={onChange && onChange} min={min} maxLength={max} />
            </div>
        </div>
    );
};

export default FormGroups;