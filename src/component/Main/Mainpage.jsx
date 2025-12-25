import React from 'react'
import Content2 from './Content2'
import Content3 from './Content3'
import Sidebar from './RightMain'
import Content1 from './content1'
import RightMain from './RightMain'
import LeftMain from './LeftMain'


const mainpage = () => {
    return (
        <div className='flex flex-col lg:flex-row h-[80vh]' >
            <LeftMain />
            <RightMain />
        </div>

    )
}

export default mainpage
