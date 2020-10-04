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
    font-size: 4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
`

export const Text = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.2rem;
    line-height: 1.8rem;
`