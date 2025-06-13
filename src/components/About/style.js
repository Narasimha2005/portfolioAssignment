import styled from 'styled-components'

export const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`
export const Image = styled.img`
    background-color: white;
    width: 200px;
    border-radius: 50%;
    padding: 20px;
    align-self: center;
    @media screen and (min-width:768px){
        margin-right: 30px;
    }
`
export const SubContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width:768px){
        flex-direction: row;
    }
`
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffdd95;
  margin: 20px 0px 20px 0px;
`
export const Content = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme === 'light' ? '#000000' : '#FFFFFF'};
  font-size: 28px;
  padding-left: 20px;
  margin: 80px 0px;
  @media screen and (min-width:768px){
    margin: 0px;
  }
`