import React, { memo, useContext } from 'react'
import FormContext from '../../context/FormContext';

const Form = ({children}) => {


    const {formData} = useContext(FormContext);


    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(formData)
    }   


    return (
        <>

            <form onSubmit={handleSubmit} className='w-[90vw]'>
            {
                children
            }
            </form>


        </>
    )
}

export default memo(Form)