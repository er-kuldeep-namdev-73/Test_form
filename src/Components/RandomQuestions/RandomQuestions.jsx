import React, {useRef,useState } from 'react'
import Field from '../Field/Field'
import RandomAddTechnology from '../RandomAddTechnology/RandomAddTechnology';

const RandomQuestions = () => {

    let technologies = [
        { label: 'Python', value: 'Python' },
        { label: 'Java', value: 'Java' },
        { label: 'React', value: 'React' }
    ]

    
    let baseData = {
        techName: "",
        mcq: 0,
        programming: 0,
        descreptive: 0,
    }
    
    const techRef = useRef(1)
    
    const [selectedTech, setSelectedTech] = useState('')

    const [technology, setTechnology] = useState({
        [`tech${techRef.current}`]: { ...baseData }
    })

    const[allTechnology,setAllTechnology]=useState([[...technologies]])

    function handleAddNewTechnolgy() {
        // setTechnology({ ...technology, [`tech${techRef.current + 1}`]: baseData })
        // techRef.current += 1
            let selected = selectedTech.value;
            let copyData = [...allTechnology.slice(-1)]
            let copyalltech = [...allTechnology]
            // console.log(copyData, selected)
            setSelectedTech('');

            copyData = copyData[0].filter(data=>(data.value != selected))

            copyalltech.push(copyData)

            setAllTechnology([...copyalltech]);
    }

    function handleDeleteNew(index){
      
        let copyData = [...allTechnology]
        copyData.splice(index,1)
        setAllTechnology([...copyData])

    } 

    return (

        <div>
            <Field
                control="input"
                fieldName="random.totalQuestions"
                fieldType="text"
                fieldLabel="Random Questions"
                fieldErrorMsg="Value must be an positive number"
                fieldPattern="^[0-9]\d*"
                fieldClass="w-[500px]"
                fieldPlaceHolder="Random Questions"
            />
           {
            allTechnology.map((tech,index)=>{
                return (
                    <div className='flex' key={index}>
                        <RandomAddTechnology setSelectedTech={setSelectedTech} handleAddNewTechnolgy={handleAddNewTechnolgy} technologies={tech} />
                        {(index>0)?<span className='text-red-600/100 mt-11 ms-5 text-xl cursor-pointer' onClick={()=>handleDeleteNew(index)} >&#x2296;</span>:null}
                    </div>
                )
            })
           }
        </div>

    )
}

export default RandomQuestions