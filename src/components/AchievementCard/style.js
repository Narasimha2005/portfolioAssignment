import styled from 'styled-components'

export const MainConatiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.theme==='light'?'black':' #1e1b2e'};
    opacity: ${props=>props.theme==='light'?'0.6':'1'};
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 10px 30px;
    margin: 10px;
    border-radius: 5px;
    width: 300px;
    height: 100px;
    color: #FFFFFF;
    @media screen and (max-width: 768px) {
        width: 100%;
    }

    &:hover {
        transition: background-color 0.3s ease, transform 0.3s ease;
        transform: scale(1.1);
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

export const Heading = styled.h1`
    font-size: 40px;
    color: white;
    margin:0px;
    margin-right: 10px;
`;
export const Description = styled.p`
    font-size: 25px;
    color: white;
    margin:0px;
`;