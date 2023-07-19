import React, {useState} from 'react'
import Form from './Components/Form/Form'
import Field from './Components/Field/Field'
import TabSwitch from './Components/TabSwitch/TabSwitch'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import FormContext from './context/FormContext';
import RandomQuestions from './Components/RandomQuestions/RandomQuestions'
import PredefinedQuestions from './Components/PredefinedQuestions/PredefinedQuestions'
import Button from './Components/Button/Button'

const App = () => {

  let testTypeOptions = [
    { label: 'coding', value: 'coding' },
    { label: 'screening', value: 'screening' }
  ]

  const [formData, setFormData] = useState({
    testName:'',
    testType:'',
    managedBy:{name:'Agent', _isMcq:true, _isDisabled:true},
    screeningType:'',
    totalQuestions:'0',
    randomQuestions:{},
    predefinedQuestions:{
      totalQuestions:0,
    },
    _isValid:false
  });



  function handleSubmit(e)
  {
    e.preventDefault();
    console.log(formData)
    alert(1);
  }

  return (
    <>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />

      <FormContext.Provider value={{formData, setFormData}}>

        <Form onFormSubmission={handleSubmit}>

          <div className='flex'>
          <Field
            control="input"
            fieldName="testName"
            fieldType="text"
            fieldLabel="Test Name"
            fieldPlaceHolder="Type test name"
            fieldErrorMsg="Error Message"
            fieldClass="w-[500px]"
          />

          <span
           className='text-green-600/100 text-xl'
          >&#8853;</span>
          </div>


          <Field
            control="selectlib"
            multiSelect="false"
            fieldName="testType"
            fieldLabel="Select Test Type, or add new test type"
            fieldPlaceHolder="Select Test Type, or add new test type"
            fieldOptions={testTypeOptions}
            fieldClass="w-[500px]"
          />

          <div className='flex'>

              <Field
                control="select"
                fieldName="managedBy"
                fieldLabel="Managed By"
                fieldOptions={["Agent", "Candidate"]}
                fieldClass="w-[500px]"
              />

              <Field
                control="radio"
                fieldLabel="isMcq"
                fieldOptions={["Yes", "No"]}
                fieldClass="w-[250px] mx-5"
              />

          </div>


          <Field
            control="select"
            fieldName="screenType"
            fieldLabel="Screening Type"
            fieldOptions={["Pre Interview", "Post Interview"]}
            fieldClass="w-[500px]"
          />

          <Field
            control="input"
            fieldName="totalQuestions"
            fieldType="number"
            fieldLabel="Total Number Of Question"
            fieldErrorMsg="Value must be an positive number"
            fieldPattern="^[0-9]\d*"
            fieldClass="w-[500px]"
          />

          <TabSwitch 
            totalQuestions={formData.totalQuestions}
            tabs={[
              {label:"Random Questions", value: <RandomQuestions/>},
              {label:"Predefined Questions", value: <PredefinedQuestions/>},
            ]}
          />

          <div>
            <Button
              btnClass={!formData._isValid ? 'rounded bg-blue-600 text-white p-2 mr-[20px]' : 'rounded bg-gray-600 text-white p-2 mr-[20px]'}
              isBtnDisabled={formData._isValid}
              btnType='submit'
            >
              Submit Candidate Test
            </Button>

            <Button
              btnClass={'rounded bg-gray-600 text-white p-2'}
              isBtnDisabled={formData._isValid}
              btnType='button'
            >
              Final Submit
            </Button>
          </div>

        </Form>
      </FormContext.Provider>
    </>
  )
}

export default App