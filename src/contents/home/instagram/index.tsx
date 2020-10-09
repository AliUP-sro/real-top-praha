import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import * as S from './styles'

export default () => {

    const breakpoints = useBreakpoint()

    const data = useStaticQuery(graphql`
    query {
        allInstaNode(limit: 10, sort: {fields: timestamp, order: DESC}, filter: {mediaType: {eq: "GraphImage"}}) {
            edges {
                node {
                    id
                    localFile {
                        childImageSharp {
                            fixed(width: 250, height: 250, quality: 80) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    },
                }
            }
        }}
    `)

    let images = data?.allInstaNode?.edges ?? []

    return (
        <S.Wrapper>
            <S.Title>Instagram</S.Title>
           <S.Images>
           {
                images.map(({ node }, index) => {
                    return (
                        <S.ImgLink href={`https://www.instagram.com/p/${node.id}`} target="_blank">
                            <Img
                                key={index}
                                alt=""
                                fixed={node.localFile.childImageSharp.fixed}
                                style={S.imageStyle}
                            />
                        </S.ImgLink>
                    )
                })
            }
           </S.Images>
        </S.Wrapper>
    )
}