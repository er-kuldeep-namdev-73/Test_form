import React, { useContext } from 'react'
import Label from '../Label/Label'
import FormContext from '../../context/FormContext';

const Radio = ({fieldLabel, fieldOptions, fieldClass}) => {

    const {formData, setFormData} = useContext(FormContext);

    console.log(formData)

    function handleRadioChange(e)
    {
        if(e.target.value === "Yes")
            setFormData((prev)=>({...prev, managedBy:{...prev.managedBy, _isMcq:true}}))
        else
            setFormData((prev)=>({...prev, managedBy:{...prev.managedBy, _isMcq:false}}))
    }
1
  return (
    <div className={fieldClass}>
        {
            (fieldLabel) && 
            <Label labelName={fieldLabel}/>
        }

        <div className='flex'>
        {
            fieldOptions.map((option, index)=>(
                <div className='flex items-center mr-[20px]' key={index}>
                    {
                        (formData.managedBy.name === 'Agent' && index === 0)
                        ? <input className='mr-[5px]' type="radio" value={option} name={fieldLabel} onChange={handleRadioChange} disabled={formData.managedBy._isDisabled} checked={formData.managedBy._isMcq}/>
                        : <input className='mr-[5px]' type="radio" value={option} name={fieldLabel} onChange={handleRadioChange} disabled={formData.managedBy._isDisabled}/>
                        
                    }
                    <Label labelName={option}/>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Radio