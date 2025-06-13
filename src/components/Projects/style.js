import styled from 'styled-components'

export const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`
export const Title = styled.h1`
font-size: 2.5rem;
  font-weight: 700;
  color: #ffdd95;
`
export const SubTitle = styled.p`
  font-size: 1.125rem;
  color: #e0cfff;
  text-align: center;
  margin: 5px 10px;
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
`

export const CategoryBar = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 5px 0px;
  margin:15px 0px;
  overflow: hidden;
  /* Depth effect */
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.15),
    0 10px 20px rgba(0, 0, 0, 0.05);

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.15),
      0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;


export const EachCategory = styled.p`
    position: relative;
    margin: 0px;
    cursor: pointer;
    padding: 5px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    z-index: 1;
    background-color: transparent;
    color: ${props => (props.active ? 'yellow' : 'white')};
    transition: color 0.3s ease;
    @media screen and (max-width: 767px){
      padding: 3px 10px;
    }
`;

export const HighlightBar = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.left}px;
    width: ${props => props.width}px;
    height: 100%;
    background-color: #5423a8;
    border-radius: 20px;
    transition: all 0.3s ease;
    z-index: 0;
`;
export const Loader = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoProjectsContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: ${props=>props.theme==='light'?"#5423a8":"#ffffff"};
  margin-right: 5px;
`