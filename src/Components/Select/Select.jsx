import React, {memo, useContext} from 'react'
import Label from '../Label/Label'
import FormContext from '../../context/FormContext'

const Select = ({fieldName, fieldLabel, fieldOptions, fieldClass}) => {


    const {formData, setFormData} = useContext(FormContext);

    function handleSelectChange(e)
    {   
        if(fieldName === 'managedBy')
        {
            if(e.target.value === 'Agent')
                setFormData((prev)=>({...prev, managedBy:{name:e.target.value, _isMcq:true, _isDisabled:true}}))
            else
                setFormData((prev)=>({...prev, managedBy:{name:e.target.value, _isMcq:false, _isDisabled:false}}))
        }
        else
        {
            setFormData((prev)=>({...prev, [fieldName]: e.target.value}))
        }
    }

  return (
    

    <div className={fieldClass}>
    {
       (fieldLabel) && 
       <Label labelName={fieldLabel} labelFor={fieldName}/>
    }
    
    <select className='w-[100%] p-2 border bg-white rounded' onClick={handleSelectChange} >
        {
            fieldOptions.map((option, index)=>(
                typeof option==="object"?<option key={index} value={option.value}>{option.value}</option>:<option key={index} value={option}>{option}</option>
            ))
        }
    </select>

    



   </div>

  )


}

export default memo(Select)