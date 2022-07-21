import react from 'react'
import { NavLink } from 'react-router-dom'

function Menu(){
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-secondary'>
             <div className="container">
                     <NavLink to={'/'} className="navbar-brand">React Form</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="menu">
                 <nav className="navbar-nav ">
                    <li className="nav-item">
                    <NavLink to={'/posts'}  className="nav-link">Posts</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={'/users'}  className="nav-link">Users</NavLink>
                    </li> 
                    <li className="nav-item">
                    <NavLink to={'/postspagi'}  className="nav-link">Post_Pagi</NavLink>
                    </li>   
                    <li className="nav-item">
                    <NavLink to={'/comments'}  className="nav-link">Comments</NavLink>
                    </li>   
                    <li className="nav-item">
                    <NavLink to={'/albums'}  className="nav-link">Albums</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to={'/photos'}  className="nav-link">Photos</NavLink>
                    </li>  
                    <li className="nav-item">
                    <NavLink to={'/todos'}  className="nav-link">To Do's</NavLink>
                    </li>           
                </nav>
             </div>
          </div>
        </nav>
    )
}
export default Menu;