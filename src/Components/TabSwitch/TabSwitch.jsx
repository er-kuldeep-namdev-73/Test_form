import PredefinedQuestions from '../PredefinedQuestions/PredefinedQuestions';
import RandomQuestions from '../RandomQuestions/RandomQuestions';
import React, { useState } from 'react'

const TabSwitch = ({tabs}) => {

    const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
        <div className='flex my-5'>
            {
                tabs.map(tab=>(
                    <button className={`w-[800px] text-center ${ tab===currentTab ? ' border-b-4 border-indigo-500' : '' }`} onClick={()=>setCurrentTab(tab)}>{tab}</button>
                ))
            }
        </div>

        <div>
        {
            currentTab === tabs[0]
            ? <RandomQuestions/>
            : <PredefinedQuestions/>
        }
        </div>
    </div>
  )
}

export default TabSwitch