import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import { HookCounter } from './components/HookCounter';
import ClassCounter2 from './components/ClassCounter2';
import { HookCounter2 } from './components/HookCounter2';
import { HookCounter3 } from './components/HookCounter3';
import { HookCounter4 } from './components/HookCounter4';
import { HookCounter5 } from './components/HookCounter5';
import ClassCounter3 from './components/ClassCounter3';
import ClassMouse from './components/ClassMouse';
import { HookMouse } from './components/HookMouse';
import { MouseContainer } from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import { IntervalHookCounter } from './components/IntervalHookCounter';
import { DataFetching } from './components/DataFetching';
import { ComponentA } from './components/ComponentA';
import { ComponentB } from './components/ComponentB';
import { ComponentC } from './components/ComponentC';
import React, { useReducer } from 'react';
import { Counter1 } from './components/Counter1';
import { CounterTwo } from './components/CounterTwo';
import { CounterThree } from './components/CounterThree';
import { DataFetchingOne } from './components/DataFetchingOne';
import { DataFetchingTwo } from './components/DataFetchingTwo';
export const UserContext =React.createContext()
export const CompanyContext =React.createContext()
export const CountContext=React.createContext()
const initialState=0;
const reducer=(state,action)=>{
  switch(action){
    case 'increment' :
        return state+1
        break
        case 'decrement' :
            
            return {state:state-1}
            break
            case 'reset' :
                return initialState
                break
            default:
                return state
}
}
function App() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter2/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3/> */}
      {/* <HookCounter4/> */}
      {/* <ClassCounter3/> */}
      {/* <HookCounter5/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <UserContext.Provider value='Shravani'>
        <CompanyContext value="CGG">
        <ComponentC/>
        </CompanyContext>
        </UserContext.Provider> */}
        {/* <Counter1/> */}
        {/* <CounterTwo/> */}
        {/* <CounterThree/> */}
        {/* Count --{count}
        <ComponentA/>
        <ComponentB/>
        <ComponentC/> */}
      {/* <DataFetchingOne/> */}
      <DataFetchingTwo/>
    </div>
    
  );
}

export default App;
