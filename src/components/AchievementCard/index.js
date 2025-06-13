import ThemeContext from "../../context/ThemeContext.js"
import { MainConatiner, Heading, Description } from "./style.js"

const AchievementCard = (props) => {
    const {details}=props
    const {id,heading,description}=details

    return(
    <ThemeContext.Consumer>
        {value => (
            <MainConatiner id={id} theme={value.theme}>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
            </MainConatiner>
        )}
    </ThemeContext.Consumer>
)}
export default AchievementCard