import React  from 'react';
import  './All.css';
import { Link  } from "react-router-dom";

const Menu =() =>{
    return(
        <div className ="Menu">
            <ul>
                <li> <Link to="/" className="linkcolor">Home </Link></li>

                <li> <Link to="Instructions" className="linkcolor" >Instructions</Link></li>

                <li> <Link to ="Departments" className="linkcolor">Departments</Link></li>
                
                <li> <Link to="Students" className="linkcolor">Students</Link></li>

                <li><Link to="Sections" className="linkcolor">Sections</Link></li>

                <li> <Link to= " ContactUs" className="linkcolor">ContactUs</Link></li>
            </ul>
        </div>
    )
}

export default Menu;







