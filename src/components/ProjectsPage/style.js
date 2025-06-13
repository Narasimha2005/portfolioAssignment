import styled from 'styled-components'

export const Homepage = styled.div`
    background-image: ${props => props.theme === 'light' ? 'linear-gradient(100deg,#b4a0d9,#5123a6)' : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),linear-gradient(100deg, #3e2f5c, #1f0e3a)'};
`;
export const Loader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffdd95;
`
export const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    min-height: 100vh;
    align-items: center;
    padding: 40px 20px;
`
export const Button = styled.button`
  background-color: #5423a8;
  border: solid 0px;
  color: #ffffff;
  padding: 8px 24px;
  border-radius: 5px;
`
export const ProjectsContainer = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px;
`
export const Box = styled.div`
    
`
export const Dot = styled.span`
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background-color: #ffffff;
    position: absolute;
    top: 20%;
    left: 20%;
`
export const SubBox = styled.div`
    height: 60px;
    width: 60px;
    border: solid 2px #ffffff;
    border-radius: 50px;
    position: absolute;
    top: 10%;
    left: 10%;
    animation: 4s linear infinite;
    &:nth-child(1){
        top: 12%;
        left: 12%;
        animation: animate 10s linear infinite;
    }
    &:nth-child(2){
        top: 70%;
        left: 50%;
        animation: animate 7s linear infinite;
    }
    &:nth-child(3){
        top: 17%;
        left: 6%;
        animation: animate 9s linear infinite;
    }
    &:nth-child(4){
        top: 20%;
        left: 60%;
        animation: animate 10s linear infinite;
    }
    &:nth-child(5){
        top: 67%;
        left: 10%;
        animation: animate 6s linear infinite;
    }
    &:nth-child(6){
        top: 67%;
        left: 70%;
        animation: animate 12s linear infinite;
    }
    &:nth-child(7){
        top: 60%;
        left: 80%;
        animation: animate 15s linear infinite;
    }
    &:nth-child(8){
        top: 32%;
        left: 25%;
        animation: animate 16s linear infinite;
    }
    &:nth-child(9){
        top: 90%;
        left: 25%;
        animation: animate 9s linear infinite;
    }
    &:nth-child(10){
        top: 20%;
        left: 80%;
        animation: animate 5s linear infinite;
    }
    @keyframes animate{
        0%{
            transform: scale(0) translateY(0) rotate(0);
        }
        100%{
            transform: scale(1.3) translateY(-80px) rotate(360deg);
            opacity: 0;
        }
    }
`