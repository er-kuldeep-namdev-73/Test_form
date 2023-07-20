import FormContext from '../../context/FormContext';
import Button from '../Button/Button';
import React, { useContext, useEffect, useState } from 'react'

const TabSwitch = ({ totalQuestions, tabs }) => {

  const {formData, setFormData} = useContext(FormContext)
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  // console.log(formData)

  if (!totalQuestions || totalQuestions <= 0 || !formData.testName || !formData.testType){
    return;
  }

  return (

    <div>
      <div className='flex my-5'>
        {
          tabs.map((tab, index) => (
            <Button key={index}
              btnClass={`w-[800px] text-center ${(tab.label === currentTab.label) ? ' border-b-4 border-indigo-500' : ''}`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab.label}
            </Button>
          ))
          
        }
      </div>

      <div>
        {
          currentTab.value
        }
      </div>
    </div>
  )
}

export default TabSwitch