import Button from '../Button/Button';
import PredefinedQuestions from '../PredefinedQuestions/PredefinedQuestions';
import RandomQuestions from '../RandomQuestions/RandomQuestions';
import React, { useState } from 'react'

const TabSwitch = ({totalQuestions, tabs}) => {

    if(!totalQuestions || totalQuestions <= 0 ) return;

    const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (

    <div>
        <div className='flex my-5'>
        {
            tabs.map(tab=>(
                <Button
                  btnClass={`w-[800px] text-center ${ (tab.label===currentTab.label) ? ' border-b-4 border-indigo-500' : '' }`}
                  onClick={()=>setCurrentTab(tab)}
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