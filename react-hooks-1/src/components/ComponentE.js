import React from 'react'
import { ComponentF } from './ComponentF'
import { useContext } from 'react'
import { CompanyContext, UserContext } from '../App'
export const ComponentE = () => {
    const user=useContext(UserContext)
    const company=useContext(CompanyContext)
    return (
        <div>
            Component E
            {/* <ComponentF/> */}
            {user} -{company}
        </div>
    )
}
