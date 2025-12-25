import React from 'react'
import Content1 from './content1'
import Content2 from './Content2'
import Content3 from './Content3'
const LeftMain = () => {
    return (
        <div className='bg-amber-500 grow-2 flex flex-col'>
            <Content1 />
            <div className='flex flex-col sm:flex-row grow'>
                <Content2 />
                <Content3 />
            </div>
        </div>
    )
}

export default LeftMain
