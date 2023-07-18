import React from 'react'
import Form from './Components/Form/Form'
import Field from './Components/Field/Field'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {

  let testTypeOptions = [
    {label: 'coding', value: 'coding'},
    {label: 'screening', value: 'screening'}
  ]

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

      <Form>

        <Field
          control="input"
          fieldName="testName"
          fieldType="text"
          fieldLabel="Test Name"
          fieldPlaceHolder="Type test name"
          fieldPattern="akash"
          fieldErrorMsg="Error Message"
        />

        <Field
          control="select"
          fieldLabel="Test Name"
          fieldPlaceHolder="Type test name"
          fieldOptions = {testTypeOptions}
        />


      </Form>

  </>
  )
}

export default App