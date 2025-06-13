import { IoIosArrowDroprightCircle } from "react-icons/io";
import {
    LinkElement,
    ProjectCardContainer,
    MainContainer,
    Heading,
    LinkContainer,
    LinkSubContainer,
    Creds,
    Description,
} from './style.js';
import ThemeContext from "../../context/ThemeContext.js";

/* === Modular, Themed Project Display Card === */
const ProjectCard = ({ details }) => {
    const { name, image_url, link } = details;

    return (
        <ThemeContext.Consumer>{value => (
            <ProjectCardContainer>

                {/* === Project Title === */}
                <Heading theme={value.theme}>{name}</Heading>

                {/* === Background Image Container with Hover Overlay === */}
                <MainContainer link={image_url}>
                    <LinkContainer theme={value.theme} href={link} target="_blank" rel="noreferrer">

                        {/* === Link Call-to-Action with Icon === */}
                        <LinkSubContainer>
                            <LinkElement theme={value.theme}>Visit Project</LinkElement>
                            <IoIosArrowDroprightCircle size={24} />
                        </LinkSubContainer>

                        {/* === Developer Credentials (Optional) === */}
                        <Creds>
                            <br />
                            Username: <strong>rahul</strong><br />
                            Password: <strong>rahul@2021</strong><br />
                            <em>(Registration in progress)</em>
                        </Creds>

                    </LinkContainer>
                </MainContainer>

                {/* === Description Section === */}
                <Description theme={value.theme}>
                    This project showcases a full-stack application featuring user authentication,
                    real-time UI feedback, and responsive design. Built with modern tech and best practices,
                    it exemplifies component reusability and interactive UI/UX integration.
                </Description>

            </ProjectCardContainer>)}
        </ThemeContext.Consumer>

    );
};

export default ProjectCard;
