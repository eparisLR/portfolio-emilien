import {Button, MobileStepper, useTheme} from "@mui/material";
import {useState} from "react";
import './../index.css';
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

const Experiences = () => {
    const theme = useTheme()
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        {
            title: "text",
            description: "description",
            img: ""
        },
        {
            title: "text1",
            description: "description",
            img: ""
        },
        {
            title: "text2",
            description: "description",
            img: ""
        },
        {
            title: "text3",
            description: "description",
            img: ""
        },
        {
            title: "text4",
            description: "description",
            img: ""
        },
        {
            title: "text5",
            description: "description",
            img: ""
        }
    ]

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return(
        <div className={"container--centered-content full-height-vh"}>
            <div>
                <p>{steps[activeStep].title}</p>
            </div>
            <MobileStepper
                variant="progress"
                steps={steps.length}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </div>
    )
}

export default Experiences;