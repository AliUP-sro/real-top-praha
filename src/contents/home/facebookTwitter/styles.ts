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

export const Feeds = styled.div<{ hidden: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    ${({ hidden }) => hidden && 'display: none'};
`

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    overflow-x: hidden;
    margin: 0 24px;
`

export const FeedTitle = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.6rem;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-weight: 700;
`