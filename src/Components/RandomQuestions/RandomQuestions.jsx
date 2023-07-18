import React from 'react'
import Field from '../Field/Field'
import SelectLib from '../SelectLib/SelectLib'

const RandomQuestions = () => {


    let testTypeOptions = [
        { label: 'coding', value: 'coding' },
        { label: 'screening', value: 'screening' }
    ]

    return (

        <div>
            <Field
                control="input"
                fieldName="questionNo"
                fieldType="text"
                fieldLabel="Random Questions"
                fieldErrorMsg="Value must be an positive number"
                fieldPattern="^[0-9]\d*"
                fieldClass="w-[500px]"
                fieldPlaceHolder="Random Questions"
            />
            <Field
                control="selectlib"
                fieldName="testType"
                fieldLabel="Technology"
                fieldPlaceHolder="Select"
                fieldOptions={testTypeOptions}
                fieldClass="w-[500px]"
            />
            <div className="flex flex-wrap justify-between">
                <Field
                    control="input"
                    fieldName="questionNo"
                    fieldType="text"
                    fieldLabel="No. of descreptive Questions"
                    fieldErrorMsg="No. Of Descreptive Questions"
                    fieldPattern="^[0-9]\d*"
                    fieldClass="w-[350px]"
                    fieldPlaceHolder="Descreptive Questions"
                />
                <Field
                    control="input"
                    fieldName="questionNo"
                    fieldType="text"
                    fieldLabel="No. Of Programming Questions"
                    fieldErrorMsg="No. Of Programming Questions"
                    fieldPattern="^[0-9]\d*"
                    fieldClass="w-[350px]"
                    fieldPlaceHolder="Proframming Questions"
                />
                <Field
                    control="input"
                    fieldName="questionNo"
                    fieldType="text"
                    fieldLabel="No. Of MCQ Questions"
                    fieldErrorMsg="No. Of MCQ Questions"
                    fieldPattern="^[0-9]\d*"
                    fieldClass="w-[350px]"
                    fieldPlaceHolder="Random Questions"
                />
            </div>
        </div>

    )
}

export default RandomQuestions