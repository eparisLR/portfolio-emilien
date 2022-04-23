import './aboutme.css';
import './../index.css';
import {Card, CardActions, CardContent} from "@mui/material";

const AboutMe = () => {
    return(
        <div className="full-height-vh container--centered-content">
            <Card>
                <CardContent>
                    <h1>whoIsIt()</h1>
                    <p>C'est moi haha</p>
                </CardContent>
                <CardActions>
                    <button className="btn-grad">Télécharger mon CV</button>
                </CardActions>
            </Card>
        </div>
    )
}

export default AboutMe;