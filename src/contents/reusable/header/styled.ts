import styled from 'styled-components'
import { Link } from 'gatsby'

export const socialIconStyle = {
    width: '100%',
    height: '100%'
}

export const Wrapper = styled.div`
    position: relative;
    height: 900px;

    @media only screen and (min-width: 360px) {
        height: 800px;
    }

    @media only screen and (min-width: 400px) {
        height: 700px;
    }
`

export const FrontDrop = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.darkBlue};
    opacity: .9;
`

export const Menu = styled.div`
    position: absolute;
    top: 0;
    height: 120px;
    width: calc(100% - 80px);
    left: calc(50% - ((100% - 80px) / 2));
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
        width: calc(100% - 160px);
        left: calc(50% - ((100% - 160px) / 2));
    }

    @media only screen and (min-width: 1024px) {
        width: calc(100% - 240px);
        left: calc(50% - ((100% - 240px) / 2));
    }
`

export const MenuItems = styled.div`
    display: flex;
`

export const MenuItem = styled(Link)`
    text-decoration: none;
    margin: 0 16px;
    color: #FFFFFF;
    text-transform: uppercase;
    cursor: pointer;
`

export const Content = styled.div`
    position: absolute;
    top: 160px;
    display: flex;
    flex-direction: column;

    width: calc(100% - 40px);
    left: calc(50% - ((100% - 40px) / 2));

    @media only screen and (min-width: 768px) {
        width: calc(100% - 160px);
        left: calc(50% - ((100% - 160px) / 2));
    }

    @media only screen and (min-width: 1024px) {
        width: calc(100% - 240px);
        left: calc(50% - ((100% - 240px) / 2));
    }
`

export const TopBox = styled.div`
    color: #FFFFFF;
    text-transform: uppercase;
    border: 4px solid #FFF;
    width: 100%;
    padding: 8px 16px;
    font-size: 1.3rem;
    font-weight: 700;

    @media only screen and (min-width: 768px) {
        width: fit-content;
        margin: 0;
        font-size: 1.6rem;     
    }
`

export const Title = styled.div`
    color: #FFF;
    font-size: 4.5rem;
    font-weight: 700;
    max-width: 550px;
    margin: 60px 0;

    @media only screen and (min-width: 768px) {
        font-size: 6rem;
        margin: 40px 0;
    }
`

export const RedTitle = styled.span`
    color: ${({ theme }) => theme.colors.red};
`

export const RedCountBar = styled.div`
    background: ${({ theme }) => theme.colors.red};
    padding: 8px 16px;
    color: #FFF;
    text-transform: uppercase;
    width: 100%;
    font-size: 1.6rem;

    @media only screen and (min-width: 768px) {
        width: fit-content;
    }

` 

export const SocialRow = styled.div`
    display: flex;
    margin: 24px 0;
`

export const SocialIconWrapper = styled.a`
width: 32px;
height: 32px;
margin: 0 8px;
cursor: pointer;
`

export const Burger = styled.img`
  width: 32px;
  cursor: pointer;
`