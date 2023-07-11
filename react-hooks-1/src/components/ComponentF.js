import React from 'react'
import { CompanyContext, UserContext } from '../App'
import { useContext } from 'react'
export const ComponentF = () => {
    return (
        <div>
            Component F
            <UserContext.Consumer>
            {
                user=>{
                    return (
                        <CompanyContext.Consumer>
                          { company=><div>
                                User Context value={user}
                                Compnay={company}
                            </div>
                }
                        </CompanyContext.Consumer>
                    )
                    // <div> User Context value {user}
                    //     </div>
                }
            }
            </UserContext.Consumer>
        </div>
    )
}
