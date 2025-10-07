import { NavLink,Link } from "react-router-dom";



export default function Navbar() {
    
    return(<>
    <nav className="navbar navbar-dark btn-warning navbar-expand-lg  ">
        <div className="container-fluid">
           < NavLink to='/home' className='navbar-brand'><i className="fa fa-snowflake-o me-2"></i> Login form
           </NavLink>
        </div>
        
       
    </nav>
    </>)
    
}