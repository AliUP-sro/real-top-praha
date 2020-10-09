import styled from 'styled-components'

export const imageStyle = {
    width: '100%',
    height: '100%'
}

export const Wrapper = styled.div`
    display: none;
    margin: 80px auto;
    flex-direction: column;


    @media only screen and (min-width: 768px) {
        display: flex;
        width: calc(100% - 160px);
    }

    @media only screen and (min-width: 1024px) {
        width: calc(100% - 240px);
    }
`


export const ImgLink = styled.a`
    margin: 8px 0;
    width: calc(((100vw - 160px - (2 * 16px)) / 2));
    height: calc(((100vw - 160px  - (2 * 16px)) / 2));

    &:hover {
        opacity: .8;
    }

    @media only screen and (min-width: 1024px) {
        width: calc(((100vw - 240px - (5 * 16px)) / 5));
        height: calc(((100vw - 240px  - (5 * 16px)) / 5));
    }

 
`


export const Images = styled.div`
    display: flex;
    overflow-x: hidden;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Title = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-weight: 700;
`