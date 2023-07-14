import React from 'react'

const Title = () => {
    console.log("Rendering title")
    return (
        <div>
            Use CallBAck
        </div>
    )
}
export default React.memo(Title)