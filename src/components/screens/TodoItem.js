import React,{useState} from 'react'

function TodoItem(props){
    const { id, title, completed} = props
    // const [checked, setChecked] = useState(false)
    
    return (
            
             <li className='list-group-item'>
                <div d-flex flex-row>
                  <label htmlFor="checkbox">{id}</label>
                    <input
                    type="checkbox"
                    id="checkbox"
                    checked={completed} 
                    className= "mx-3"
                  />
                   <label className={completed ? 'text-success' : 'text-danger'}>{title}</label> <br />
                </div>
                
              
                

             </li>
                
                
            

)
}
export default TodoItem