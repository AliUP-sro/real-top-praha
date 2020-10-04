import styled from 'styled-components'

export const Wrapper = styled.div`
    width: calc(100% - 40px);
    margin: 40px auto;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        width: calc(100% - 160px);
        margin: 80px auto;
    }

    @media only screen and (min-width: 1024px) {
        width: calc(100% - 240px);
    }
`

export const Title = styled.div`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
    margin: 24px 0 8px 0;
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const RowBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 0;
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0;
`

export const SectionTitle = styled.div`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.2rem;
`

export const SectionText = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.1rem;
`

export const SocialRow = styled.a`
    height: 60px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.1rem;
    cursor: pointer;
    text-decoration: none;
`

export const DownloadAnchor = styled.a`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: none;
`

export const SocialIconWrapper = styled.i`
    width: 32px;
    height: 32px;
    margin: 0 8px;
    cursor: pointer;
`