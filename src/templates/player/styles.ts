import styled from 'styled-components'

export const Wrapper = styled.div`
    width: calc(100% - 40px);
    margin: 40px auto;

    @media only screen and (min-width: 768px) {
        width: calc(100% - 160px);
        margin: 80px auto;
    }

    @media only screen and (min-width: 1024px) {
        width: calc(100% - 240px);
    }
`

export const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 24px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        height: 600px;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 360px;

    @media only screen and (min-width: 1024px) {
        height: 100%;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.blue};
    padding: 24px;
    min-width: 35%;
`

export const Name = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: #FFF;
`

export const Text = styled.div`
    color: #FFF;
    font-weight: 600;
    font-size: 1.3rem;
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 0;
`

export const SectionTitle = styled.div`
    font-size: 1.2rem;
    color: #FFFFFF80;
`

export const Photos = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 24px 0;
    justify-content: space-evenly;
`

export const PhotoWrapper = styled.a`
    width: 200px;
    height: 200px;
    margin: 16px 0;
`