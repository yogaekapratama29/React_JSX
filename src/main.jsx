import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorld from './hello-world/HelloWorld.jsx'
import Container from './hello-world/Container.jsx'
import TodoList from './todolist/TodoList.jsx'
import Table from './table/Table.jsx'
import AlertButton from './button/AlertButton.jsx'
import MyButton from './button/MyButton.jsx'
import Toolbar from './button/Toolbar.jsx'
import SearchForm from './form/SearchForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
     <HelloWorld/>
     <TodoList/>
     <Table/>
     <AlertButton text="Click Me" message="You Click Me"/>
     <AlertButton text="Click You" message="You Click You"/>

     <MyButton text="Smash Me" onSmash={()=> alert("You smash Me")}/>
     <MyButton text="Hit Me" onSmash={()=> alert("You Hit Me")}/>

      <Toolbar onClick={(e) => {
        e.stopPropagation();
        alert("You Click Toolbar");
      }}/>

      <SearchForm/>
    </Container>
  </StrictMode>,
)
