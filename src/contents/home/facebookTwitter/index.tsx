import React from 'react';
import { Helmet } from 'react-helmet';
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import * as S from './styles'

export default () => {

    const breakpoints = useBreakpoint()
    return (
        <S.Wrapper>
            <Helmet>
                <script
                    async
                    defer
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v8.0&appId=732863807220321&autoLogAppEvents=1"
                    nonce="LpRkwpF3" />

                <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8"></script>
            </Helmet>


            <S.Feeds hidden={breakpoints.lg}>
                <S.Feed>
                    <S.FeedTitle>Facebook</S.FeedTitle>
                <div
                    className="fb-page"
                    data-href="https://www.facebook.com/RealTopPraha/"
                    data-tabs="timeline"
                    data-width="500"
                    data-height="700"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="true"
                    data-show-facepile="true" />
                </S.Feed>

                <S.Feed>
                    <S.FeedTitle>Twitter</S.FeedTitle>
                <a className="twitter-timeline"
                    data-lang="cs"
                    data-width="500"
                    data-height="700"
                    data-theme="light"
                    href="https://twitter.com/RealTopPraha?ref_src=twsrc%5Etfw"></a>
                </S.Feed>

            </S.Feeds>
            
        </S.Wrapper>
    )
}