import styled from "styled-components";
import Page from '../../../src/ImagesIcons/page.png';
import bgLeft from "../../../src/images/green-bg.png"
import bgRight from "../../../src/images/stadium.png"

interface PageWrapperProps {
    $margin?: string;
}

export const PageWrapper = styled.div<PageWrapperProps>`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    display: flex;
    min-height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 100% 100%;
    @media (max-width: 991px) {
        max-width: 100%;
        padding: 100px 0;
    }
`;

export const BgWrapper = styled.div`
display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;

    background: #f0f4f0;

`

export const BgLeftWrapper = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
img {
    width: 100%;
    position: relative;
    top: 50px;
}


`

export const BgRightWrapper = styled.div`

width: 50%;
background-image: url(${bgLeft});
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
background-position: 20%;

`





interface MainSectionWrapperProps {
    $margin?: string;
}

export const MainSectionWrapper = styled.div<MainSectionWrapperProps>`
    display: flex;
    flex-direction: column;
    padding-left: ${({ $margin }) => $margin};
    width: 100%;
    transition: 0.5s;

    
  
    .main-page{
    display: flex;
    // align-items: center;
    justify-content: center;
    // background: #F3F3F9;
    height: 100%;
    }
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
