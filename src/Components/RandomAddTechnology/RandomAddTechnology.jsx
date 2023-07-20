import React, { useContext, useState } from 'react'
import Field from '../Field/Field'
import FormContext from '../../context/FormContext'

const RandomAddTechnology = ({ handleAddNewTechnolgy, technologies, setSelectedTech }) => {

    const { formData } = useContext(FormContext);

    return (
        <>
            <div>
                <div className='flex'>
                    <Field
                        control="selectlib"
                        fieldName="random.technology"
                        fieldLabel="Technology"
                        fieldPlaceHolder="Select"
                        fieldOptions={technologies}
                        fieldClass="w-[500px]"
                        multiSelect="false"
                        onChange={(value) => setSelectedTech(value)}
                    />

                    <span
                        className='text-green-600/100 text-xl mt-11 ms-5 cursor-pointer'
                        onClick={handleAddNewTechnolgy}
                    >&#8853;</span>
                </div>
                <div className="flex flex-wrap justify-between">

                    {
                        formData.managedBy.name === "Agent"
                            ?
                            <Field
                                control="input"
                                fieldName="random.mcq"
                                fieldType="text"
                                fieldLabel="No. Of MCQ Questions"
                                // fieldErrorMsg="No. Of MCQ Questions"
                                fieldPattern="^[0-9]\d*"
                                fieldClass="w-[500px]"
                                fieldPlaceHolder="MCQ Question"
                                checkFields={true}

                            // fieldValue={formData.randomQuestions.totalQuestions}

                            />
                            :
                            <>
                                <Field
                                    control="input"
                                    fieldName="random.descreptiveQuestions"
                                    fieldType="text"
                                    fieldLabel="No. of descreptive Questions"
                                    // fieldErrorMsg="No. Of Descreptive Questions"
                                    fieldPattern="^[0-9]\d*"
                                    fieldClass="w-[350px]"
                                    fieldPlaceHolder="Descreptive Questions"
                                    checkFields={true}
                                // className="ml-5"
                                />
                                <Field
                                    control="input"
                                    fieldName="random.programming"
                                    fieldType="text"
                                    fieldLabel="No. Of Programming Questions"
                                    // fieldErrorMsg="No. Of Programming Questions"
                                    fieldPattern="^[0-9]\d*"
                                    fieldClass="w-[350px]"
                                    fieldPlaceHolder="Proframming Questions"
                                    checkFields={true}
                                />
                                <Field
                                    control="input"
                                    fieldName="random.mcq"
                                    fieldType="text"
                                    fieldLabel="No. Of MCQ Questions"
                                    // fieldErrorMsg="No. Of MCQ Questions"
                                    fieldPattern="^[0-9]\d*"
                                    fieldClass="w-[350px]"
                                    fieldPlaceHolder="MCQ Questions"
                                    checkFields={true}
                                />
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default RandomAddTechnology