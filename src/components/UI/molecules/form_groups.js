import React from 'react';

const FormGroups = ({label}) => {
    return (
        <div className="form-group" style={{fontSize: 24}}>
            <label>{label}</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" />
            </div>
        </div>
    );
};

export default FormGroups;