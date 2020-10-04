import styled from 'styled-components'

export const Wrapper = styled.div`
    width: calc(100% - 40px);
    margin: 80px auto;

    @media only screen and (min-width: 768px) {
        width: calc(100% - 160px);
    }

    @media only screen and (min-width: 1024px) {
        width: calc(100% - 240px);
    }
`

export const Title = styled.div<{ partnersPage: boolean }>`
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ partnersPage }) => partnersPage ? '2.3rem' : '1.6rem'};
    text-transform: uppercase;
    margin-bottom: ${({ partnersPage }) => partnersPage ? '40px' : '8px'};
    font-weight: 700;
`

export const Partners = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const imgStyle = {
    margin: '24px',
    maxWidth: '90%'
}