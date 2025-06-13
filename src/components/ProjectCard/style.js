import styled from 'styled-components';

export const LinkContainer = styled.a`
  position: absolute;
  top: 80px;
  left: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  background: rgb(84,35,168,0.6);
  padding: 8px 12px;
  border-radius: 10px;
  backdrop-filter: blur(4px);
  width: 80%;
  margin-left:5px;
  color: #FFFFFF;
`;
export const LinkSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Creds = styled.p`
  font-size: 10px;
  margin: 0px;
`
export const LinkElement = styled.p`
  color: #FFFFFF;
  text-decoration: none;
  margin: 0px;
`

export const MainContainer = styled.div`
  background-image: url(${props => props.link});
  background-size: cover;
  width: 250px;
  height: 130px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  
`;

export const Heading = styled.h1`
  font-size: 20px;
  color: ${props => props.theme === 'light' ? '#000000' : '#FFFFFF'};
`;
export const ProjectCardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  width: 300px;
  
  position: relative;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  color: #fff;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    transform: rotateY(8deg) rotateX(8deg) scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  &:hover ${LinkContainer} {
    opacity: 1;
    transform: translateY(0);
  }
  animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
    @keyframes appear{
        from {
            opacity: 0;
            transform: translateX(-100px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin: 10px 0 0 0;
  max-width: 250px;
  color: ${props => props.theme === 'light' ? '#000000' : '#FFFFFF'};
  word-wrap: break-word;
`;
