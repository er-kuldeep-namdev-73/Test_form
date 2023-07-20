import Label from '../Label/Label';
import FormContext from '../../context/FormContext';
import React, { memo, useContext } from 'react'
import { toast } from 'react-toastify';
import './Input.css';


const Input = ({ fieldLabel, fieldType, fieldPlaceHolder, fieldPattern, fieldErrorMsg, fieldName, fieldValue, fieldClass, onChange,disabled=false, checkFields=false }) => {

    // console.log("Input")

    const { formData, setFormData } = useContext(FormContext);


    // handle input change function
    function handleInputChange(e) {
        // console.log(e)
        eval('formData')

        if (fieldPattern) {
            let pattern = new RegExp(fieldPattern);
            if (!pattern.test(e.target.value)){
                toast.error(fieldErrorMsg);
            }
                
        }

        if (fieldName.includes("predefined")) {
            if (fieldName.includes("totalQuestions")) {
                if (Number(e.target.value) > Number(formData.totalQuestions)){
                    toast.error("Value exceeded from the provided value.")
                }
                else{
                    setFormData((prev) => ({ ...prev, predefinedQuestions: { ...prev.predefinedQuestions, totalQuestions: e.target.value } }))
                }
            }

        }
        else if (fieldName.includes("random")) {

            let key = fieldName.split(".")[1]
            if (Number(e.target.value) > Number(formData.totalQuestions)) {
                toast.error("Value exceeded from the provided value.")
            }
            else {
                setFormData((prev) => ({ ...prev, randomQuestions: { ...prev.randomQuestions, [key]: e.target.value }}))
            }

            if(checkFields)
            {
                handleChange(key, e.target.value);
            }



        }
        else
            setFormData((prev) => ({ ...prev, [fieldName]: e.target.value }));

    }
    // console.log(formData.randomQuestions)
    
    function handleChange(key, value){

        let totalInput;
        if(key==="descreptiveQuestions")
        {
            totalInput=Number(value)+Number(formData.randomQuestions.mcq)+Number(formData.randomQuestions.programming)
        }
        else if(key==="programming")
        {
            totalInput=Number(formData.randomQuestions.descreptiveQuestions)+Number(formData.randomQuestions.mcq)+Number(value)
        }
        else
        {
            totalInput=Number(formData.randomQuestions.descreptiveQuestions)+Number(value)+Number(formData.randomQuestions.programming)
        }

        if(Number(formData.randomQuestions.totalQuestions)<totalInput){
            toast.error("Total Question Value exceed from the Provided Value");
        }

        
        
    }

    // debouncing on handleInputchange
    function debounceInput(handleInputChange, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                handleInputChange(...args);
            }, delay)
        }
    }

    let debouncedInputData = debounceInput(handleInputChange, 500)

    return (
        <div className={fieldClass}>
            {
                (fieldLabel) &&
                <Label labelName={fieldLabel} labelFor={fieldName} />
            }

            {
                <input className='inputField w-[100%]' id={fieldName} type={fieldType} placeholder={fieldPlaceHolder} onChange={onChange ?? debouncedInputData} value={fieldValue} disabled={disabled}/>
            }


        </div>
    )
}

export default memo(Input);