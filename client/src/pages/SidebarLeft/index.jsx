
import React from 'react'
import AddList from '../../components/AddList'

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

 export default function SidebarLeft(props) {
   
  return (
    
<div id='left' className={props.left} >
    <div className='icon'
         onClick={props.show} >
         &equiv;
    </div>
    <div className={`sidebar ${props.left}`} >
        <div className='header'>
          <h3 className='title'>
            Left header
          </h3>
        </div>
        <div className='content'>
            < AddList tasks={DATA} />
        </div>
    </div>
</div>
    
  )
}
