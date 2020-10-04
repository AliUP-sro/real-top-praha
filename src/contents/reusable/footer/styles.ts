import styled from 'styled-components'

export const socialIconStyle = {
    width: '100%',
    height: '100%',
}

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    background: ${({ theme }) => theme.colors.blue};
    padding: 16px 40px;

    @media only screen and (min-width: 768px) {
        padding: 16px 120px;
    }

    @media only screen and (min-width: 1024px) {
      
    }
`

export const TopRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    flex-wrap: wrap;

    @media only screen and (min-width: 1536px) {
        margin-bottom: 0;
    }
`

export const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    @media only screen and (min-width: 768px) {
        justify-content: flex-start;
        width: 260px;
        margin-bottom: 0px;
    }
`

export const SocialRow = styled.div`
    display: flex;
    width: 100%;
    display: flex;
    justify-content: center;

    @media only screen and (min-width: 768px) {
        width: 260px;
        justify-content: flex-end;
    }
    
`

export const Text = styled.div`
    color: #FFF;
    text-align: center;
`

export const SocialIconWrapper = styled.a`
width: 32px;
height: 32px;
margin: 0 8px;
cursor: pointer;
`