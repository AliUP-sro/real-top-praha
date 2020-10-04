import styled from 'styled-components'

export const Wrapper = styled.div`
    width: calc(100% - 40px);
    margin: 40px auto;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        width: calc(100% - 160px);
        flex-direction: row;
        justify-content: space-between;
        margin: 80px auto;
    }

    @media only screen and (min-width: 1024px) {
        width: calc(100% - 240px);
    }
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 16px 0;

    @media only screen and (min-width: 768px) {
        width: calc(50% - 32px);
        margin: 0;
    }
`

export const Title = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-weight: 700;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    margin: 4px 0;
    background: ${({ theme }) => theme.colors.blue};
`

export const RowBadge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    background: ${({ theme }) => theme.colors.darkRed};
    color: #FFF;
    font-weight: 600;
`

export const RowBadgeText = styled.div`
    font-size: 1.6rem;
    margin-top: -6px;
`

export const RowBadgeSubText = styled.div`
    font-size: .8rem;
`

export const RowDesc = styled.div`
    flex: 1;
    padding: 0 16px;
    flex-direction: column;
    justify-content: center;
    
    color: #FFF;
    font-weight: 600;
`

export const RowDescText = styled.div`
    font-size: 1.2rem;
    margin-top: -6px;
    text-transform: uppercase;
    @media only screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`

export const RowDescSubText = styled.div`
    font-size: .8rem;
`