import React from 'react'
import {memo} from 'react'
const Count = ({text,count}) => {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text}-{count}
        </div>
    )
}
export default React.memo(Count)