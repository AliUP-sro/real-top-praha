import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import * as S from './styles'

type Props = {
    partnersPage?: boolean
}

export default ({ partnersPage }: Props) => {

    const data = useStaticQuery(graphql`
        query {
            normal: allFile(filter: { relativeDirectory: { eq: "partners" } }) {
                edges {
                    node {
                        childImageSharp {
                            fixed(height: 60, quality: 100) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
            bigger: allFile(filter: { relativeDirectory: { eq: "partners" } }) {
                edges {
                    node {
                        childImageSharp {
                            fixed(height: 80, quality: 100) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `)

    const images = partnersPage ? data.bigger.edges : data.normal.edges

    return (
        <S.Wrapper>
            <S.Title partnersPage={partnersPage}>Naši partneři</S.Title>
            <S.Partners>
            {
                images.map((image, index) => image.node.childImageSharp?.fixed ? (
                    <Img
                        key={index}
                        alt=""
                        fixed={image.node.childImageSharp.fixed}
                        style={S.imgStyle}
                        imgStyle={{
                            objectFit: "contain",
                            objectPosition: "50% 50%",
                          }}
                    />
                ) : null)
            }
            </S.Partners>
        </S.Wrapper>
    )
}