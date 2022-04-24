import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Elevator from 'elevator.js';
import "./layout.css";
import './../index.css';
import {MoreHoriz} from "@mui/icons-material";

const Layout = (props) => {
    const elevator = new Elevator({element: document.querySelector('.elevator-button'), targetElement: document.querySelector('.welcome')})

    return(
        <div className="container">
            <header className="header">
                <div className="full-width">
                    <ul className="header--links-list">
                        <li>A propos de moi</li>
                        <li>Mes compétences</li>
                        <li>Mes réalisations</li>
                        <li>Contactez-moi</li>
                        <li className={"header--options-container"}><MoreHoriz/>
                            <ul className="header--options-list">
                                <li>Dysléxie</li>
                                <li>A-</li>
                                <li>A</li>
                                <li>A+</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>

            {props.home}
            {props.aboutMe}
            {props.experiences}
            {props.creations}
            <ArrowCircleUpIcon onClick={ () => {elevator.elevate()}} className="elevator"/>
            <footer className="footer">
                <p>Émilien Paris © 2022 | Tous droits réservés | Mentions Légales</p>
            </footer>
        </div>
    )
}

export default Layout;