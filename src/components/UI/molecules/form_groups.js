import React from 'react';

const FormGroups = ({label, onChange}) => {
    return (
        <div className="form-group" style={{fontSize: 24}}>
            <label>{label}</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={onChange && onChange} />
            </div>
        </div>
    );
};

export default FormGroups;