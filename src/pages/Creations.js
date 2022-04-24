import './../index.css';
import {ImageList, ImageListItem} from "@mui/material";

const Creations = () => {
    const creationsList = [
        {
            url: "test",
            title: "hahaha"
        }
    ];
    return(
        <div className="container--centered-content min-height-vh">
            <ImageList variant="masonry" cols={3} gap={10}>
                { creationsList.map((item) => (
                    <ImageListItem key={item?.url}>
                        <img
                            src={item.url}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default Creations;