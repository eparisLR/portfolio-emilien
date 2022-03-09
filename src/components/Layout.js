import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Elevator from 'elevator.js';

const Layout = (props) => {
    const elevator = new Elevator({element: document.querySelector('.elevator-button'), targetElement: document.querySelector('#presentation')})

    return(
        <div style={{position: 'relative', width: '100%', height: '100%' }}>
            <header style={{position: 'fixed', display: 'flex', flexDirection: 'column', width: '100%'}}>
                <div style={{display: 'flex',  justifyContent: 'space-between', width: '100%'}}>
                    <ul style={{display: 'flex',  justifyContent: 'space-around', listStyle: 'none', width: '15%'}}>
                        <li>Dysléxie</li>
                        <li>A-</li>
                        <li>A</li>
                        <li>A+</li>
                    </ul>
                    <ul style={{display: 'flex',  justifyContent: 'space-around', listStyle: 'none', width: '10%'}}>
                        <li>Anglais</li>
                        <li>Français</li>
                    </ul>
                </div>
                <div style={{width: '100%'}}>
                    <ul style={{display: 'flex', listStyleType: 'none', justifyContent: 'space-around'}}>
                        <li>A propos de moi</li>
                        <li>Mes compétences</li>
                        <li>Mes réalisations</li>
                        <li>Contactez-moi</li>
                    </ul>
                </div>
            </header>

            <p id="presentation" style={{height:'200vh'}}>Top</p>
            {props.aboutMe}
            <ArrowCircleUpIcon onClick={ () => {elevator.elevate()}} style={{fontSize: '3rem', position: 'fixed', bottom: '1vh', right:'1vw'}}/>
            <footer style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <p>Émilien Paris © 2021 | Tous droits réservés | Mentions Légales</p>
            </footer>
        </div>
    )
}

export default Layout;