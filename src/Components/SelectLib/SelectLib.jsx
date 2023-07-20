import React, { useContext } from 'react'
import CreatableSelect from 'react-select/creatable';
import Label from '../Label/Label';
import FormContext from '../../context/FormContext';

const SelectLib = ({multiSelect="true", fieldLabel, fieldPlaceHolder, fieldOptions, fieldName, fieldClass, onChange}) => {

    const {setFormData} = useContext(FormContext);


    function handleSelectChange(option)
    {
        (option) 
        ? setFormData((prev)=>({...prev, testType: option.value}))
        : setFormData((prev)=>({...prev, testType: ''}))


        console.log(option)
    }

    function handleMultiSelect(value)
    {
        if(fieldName.includes("random.technology"))
        {
            setFormData((prev)=>({...prev, randomQuestions: {...prev.randomQuestions, technology:[...value]}}))
        }
    }

    return (
        <div className={fieldClass}>
         {
            (fieldLabel) && 
            <Label labelName={fieldLabel} labelFor={fieldName}/>
        }
        {
            (multiSelect === "true")
            
            ?

            <CreatableSelect isMulti options={fieldOptions} placeholder={fieldPlaceHolder} onChange={onChange ?? handleMultiSelect}/>
            
            :

            <CreatableSelect isClearable options={fieldOptions} placeholder={fieldPlaceHolder} onChange={onChange ?? handleSelectChange}/>
        }
        </div>
    )
}

export default SelectLib