import styled from 'styled-components'
import { Link } from 'gatsby'

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

export const Selection = styled.div`
    display: flex;
    flex-direction: row;
`

export const SelectionItem = styled.div<{ active: boolean }>`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
    text-transform: uppercase;
    margin: 16px 16px 8px 0;
    opacity: .5;

    ${({ active }) => !active && ` 
        opacity: 1;
        &:hover {
            text-decoration: underline;
        }
        cursor: pointer;
    `}

`

export const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
`

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const ListItem = styled(Link)`
    width: calc(((100vw - 40px - (2 * 16px)) / 2));
    cursor: pointer;
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    text-decoration: none;

    @media only screen and (min-width: 768px) {
        width: calc(((100vw - 160px - (4 * 16px)) / 4));
        transition: transform .25s;
        &:hover {
            transform: translateY(-5px);
        }
    }

    @media only screen and (min-width: 1024px) {
        width: calc(((100vw - 240px - (5 * 16px)) / 5));
    }

    @media only screen and (min-width: 1440px) {
        width: calc(((100vw - 240px - (6 * 16px)) / 6));
    }
`

export const ListItemImage = styled.div`
    height: 240px;
    width: 100%;
`

export const ListItemName = styled.div`
    background: ${({ theme }) => theme.colors.blue};
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 60px;
    color: #FFF;
    font-size: 1.2rem;
`