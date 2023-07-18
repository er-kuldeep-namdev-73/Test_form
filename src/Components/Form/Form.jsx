import React from 'react'

const Form = ({children}) => {


    function handleSubmit(e)
    {
        e.preventDefault();
    }   


    return (
        <>

            <form onSubmit={handleSubmit}>
            {
                children
            }
            </form>


        </>
    )
}

export default Form