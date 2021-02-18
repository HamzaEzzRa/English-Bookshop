import "./dashboard.css"
import logo from "./images/logo.svg"
import './horizontalNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function HorizontalNav(){
    return(
        <div>
            <ul class="nav flex-column Nav">
                        <li>
                            <img src={logo} class="img-fluid" alt="Logo" />
                        </li>
                        <li class="nav-item">
                            {(localStorage.getItem('role') === 'freelancer') ? 
                            <a class="nav-link active" href="#"><Link to="/dashboard" ><FontAwesomeIcon icon={faSquare} /> Dashboard</Link></a>
                             : <a class="nav-link active" href="#"><Link to="/customer/dashboard" ><FontAwesomeIcon icon={faHome} /> Dashboard</Link></a>}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to="/annonces" > <FontAwesomeIcon icon={faHome} />Annonces</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Service Client</a>
                        </li>
                        <li class="nav-item">
                        {(localStorage.getItem('role') === 'freelancer') ? 
                             <a class="nav-link" href="#"><Link to="/portfeuille" >Portfeuille</Link></a>
                             : <a class="nav-link active" href="#"><Link to="#" >Historique</Link></a>}
                            
                        </li>
                        <li class="nav-item">
                        {(localStorage.getItem('role') === 'freelancer') ? 
                            <a class="nav-link" href="#"><Link to="/freelancer/profile" >Profile</Link></a>
                             : <a class="nav-link" href="#"><Link to="/customer/profile" >Profile</Link></a>}
                            
                        </li>
                        <li class="nav-item BottomNav">
                            <a class="nav-link" href="#">Hamid Aarif</a>
                        </li>
                    </ul>
        </div>
    )
}

export  default HorizontalNav;