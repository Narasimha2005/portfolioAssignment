import { SubContainer, Title, MainContainer, Content, Image } from './style.js'
import ThemeContext from '../../context/ThemeContext.js'

const About = () => {

    return (
        <ThemeContext.Consumer>{value => (
            <MainContainer>
                <Title>About Me</Title>
                <SubContainer>
                    <Image src="https://media.licdn.com/dms/image/v2/D5603AQECfjYUD-cXlQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724665478147?e=2147483647&v=beta&t=43eL_8BknRw76JdjSzvVrtVU45FmBuGQ49hDTc6xiqk" />
                    <Content theme={value.theme}>
                        <p>I'm a full-stack developer who blends logic with imagination. Whether it's building sleek android apps or crafting responsive web experiences, I treat every project like a digital canvas. I believe clean code is poetry, and I aim to write verses that both humans and machines understand.</p>
                    </Content>
                </SubContainer>
            </MainContainer>)}
        </ThemeContext.Consumer>
    )
}
export default About