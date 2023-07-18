import React from 'react'
import Input from '../Input/Input';
import Select from '../Select/Select';

const Field = ({control, ...props}) => {

    switch(control)
    {
        case 'input':
            return <Input {...props}/>;
        
        case 'select':
            return <Select {...props}/>

        default:
            return;
    }

}

export default Field