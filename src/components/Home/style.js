import styled from 'styled-components';

/* === 3D Robot Viewer Container === */
export const Robot = styled.div`
  width: 600px;
  height: 70vh;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

/* === Fallback Profile Image for Smaller Screens === */
export const Image = styled.img`
  background-color: white;
  width: 200px;
  border-radius: 50%;
  padding: 20px;
  align-self: center;
  @media screen and (min-width: 990px) {
    display: none;
  }
`;

/* === Homepage Main Title === */
export const Heading = styled.h1`
  color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
  font-family: 'Lobster Two', sans-serif;
  font-weight: 400;
  font-size: 48px;
`;

/* === Page Background Styling === */
export const Homepage = styled.div`
  background-image: ${props =>
    props.theme === 'light'
      ? 'linear-gradient(100deg, #b4a0d9, #5123a6)'
      : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(100deg, #3e2f5c, #1f0e3a)'};
  padding: 0 100px 40px;
  @media screen and (max-width: 768px) {
    padding: 0 20px 40px;
  }
`;

/* === Layout Wrapper for Hero Section === */
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

/* === Left Section of Hero (Text Content) === */
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;
  margin: 20px;
  @media screen and (min-width: 768px) {
    order: 0;
    min-height: 70vh;
  }
`;

/* === Typing Profession Highlight === */
export const Profession = styled.h1`
  color: #fff37a;
`;

/* === Summary Text Below Name === */
export const Description = styled.p`
  color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
  max-width: 350px;
`;

/* === Social Icon Buttons (LinkedIn, GitHub, etc.) === */
export const LinkButton = styled.a`
  background: transparent;
  border: 1px solid ${props => props.theme === 'light' ? '#5423a8' : '#FFF'};
  color: ${props => props.theme === 'light' ? '#5423a8' : '#FFF'};
  border-radius: 40px;
  padding: 0 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  text-decoration: none;
`;

/* === Resume Download Button === */
export const ResumeButton = styled.a`
  background: transparent;
  border: 1px solid ${props => props.theme === 'light' ? '#5423a8' : '#FFF'};
  color: ${props => props.theme === 'light' ? '#5423a8' : '#FFF'};
  border-radius: 20px;
  padding: 5px 15px;
  font-weight: bold;
  font-size: 12px;
  margin-right: 10px;
  text-decoration: none;
`;

/* === Achievements Grid Wrapper === */
export const Achievements = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

/* === Container for Animated Dot Elements === */
export const Box = styled.div``;

/* === Animated Dot in Each SubBox === */
export const Dot = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background-color: #fff;
  position: absolute;
  top: 20%;
  left: 20%;
`;

/* === Circular Orbit Elements with Animation === */
export const SubBox = styled.div`
  height: 60px;
  width: 60px;
  border: 2px solid #fff;
  border-radius: 50px;
  position: absolute;
  animation: 4s linear infinite;

  /* Individual dot position & animation timings */
  ${[...Array(10)].map((_, i) => `
    &:nth-child(${i + 1}) {
      top: ${[12, 70, 17, 20, 67, 67, 60, 32, 90, 20][i]}%;
      left: ${[12, 50, 6, 60, 10, 70, 80, 25, 25, 80][i]}%;
      animation: animate ${[10, 7, 9, 10, 6, 12, 15, 16, 9, 5][i]}s linear infinite;
    }
  `)}

  @media screen and (max-width: 768px) {
    ${[...Array(10)].map((_, i) => `
      &:nth-child(${i + 1}) {
        top: ${[10, 30, 20, 40, 50, 20, 25, 30, 40, 50][i]}%;
        left: ${[12, 70, 6, 75, 10, 60, 80, 15, 20, 80][i]}%;
        animation: animate ${[10, 7, 9, 10, 6, 12, 15, 16, 9, 5][i]}s linear infinite;
      }
    `)}
  }

  @keyframes animate {
    0% {
      transform: scale(0) translateY(0) rotate(0);
    }
    100% {
      transform: scale(1.3) translateY(-100px) rotate(360deg);
      opacity: 0;
    }
  }
`;
