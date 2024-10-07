import React from 'react';

const SizeCheckbox = ({ size, checked, onChange }) => {
    return (
        <div className="form-control">
            <label className="cursor-pointer label">
                <input 
                    type="checkbox" 
                    className="checkbox checkbox-success checkbox-xs" 
                    checked={checked} 
                    onChange={onChange} 
                />
                <span className="label-text w-full ml-5">{size}</span>
            </label>
        </div>
    );
};

export default SizeCheckbox;
