import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorld from './hello-world/HelloWorld.jsx'
import Container from './hello-world/Container.jsx'
import TodoList from './todolist/TodoList.jsx'
import Table from './table/Table.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
     <HelloWorld/>
     <TodoList/>
     <Table/>
    </Container>
  </StrictMode>,
)
