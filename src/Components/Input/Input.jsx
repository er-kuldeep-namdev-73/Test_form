import Label from '../Label/Label';
import React, { memo } from 'react'
import { toast } from 'react-toastify';
import './Input.css';


const Input = ({fieldLabel, fieldType, fieldPlaceHolder, fieldPattern, fieldErrorMsg, fieldName}) => {

    console.log("Input")

    // handle input change function
    function handleInputChange(e)
    {
        // console.log(e)

        if(fieldPattern)
        {
            let pattern = new RegExp(fieldPattern);
    
            if(!pattern.test(e.target.value))
                toast.error(fieldErrorMsg);
        }
        
        
    }

    // debouncing on handleInputchange
    function debounceInput(handleInputChange, delay)
    {
        let timer;
        return function(...args)
        {
            clearTimeout(timer);
            timer = setTimeout(function()
            {
                handleInputChange(...args);
            },delay)
        }
    }

    let debouncedInputData = debounceInput(handleInputChange, 500)

    return (
        <>
        {
            (fieldLabel) && 
            <Label labelName={fieldLabel} labelFor={fieldName}/>
        }
        
        <input className='inputField' id={fieldName} type={fieldType} placeholder={fieldPlaceHolder} onChange={(e)=>debouncedInputData(e)}/>

        </>
    )
}

export default memo(Input);