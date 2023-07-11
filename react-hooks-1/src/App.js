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
import React from 'react';
import { Counter1 } from './components/Counter1';
export const UserContext =React.createContext()
export const CompanyContext =React.createContext()
function App() {
  return (
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
        <Counter1/>
      
    </div>
  );
}

export default App;
