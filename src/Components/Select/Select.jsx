import React from 'react'
import CreatableSelect from 'react-select/creatable';

const Select = ({multiSelect=false, fieldLabel, fieldPlaceHolder}) => {


    return (
        <>
            <CreatableSelect isClearable options={fieldOptions} />
        </>
    )
}

export default Select