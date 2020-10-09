import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import * as moment from 'moment'

import Layout from '../../components/layout'
import Header from '../../contents/reusable/header'
import Footer from '../../contents/reusable/footer'
import Partners from '../../contents/reusable/partners'

import * as S from './styles'

export default ({ pageContext: { player } }) => {
    const images = useStaticQuery(graphql`
        {
        thumbnails: allFile(filter: {relativeDirectory: {regex: "^galery/players/"}, name: {eq: "thumbnail"}}) {
          edges {
            node {
              id
              relativeDirectory
              childImageSharp {
                fluid(maxHeight: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
                original {
                    src
                }
              }
            }
          }
        }
        images: allFile(filter: {relativeDirectory: {regex: "^galery/players/"}, name: {ne: "thumbnail"}}) {
          edges {
            node {
              id
              relativeDirectory
              childImageSharp {
                fixed(height: 200, width: 200, quality: 60) {
                    ...GatsbyImageSharpFixed
                }
                original {
                    src
                }
              }
            }
          }
        }
      }
    `)

    const getPlayerThumbnail = (slug: string) =>
        images.thumbnails.edges.find(i => i.node.relativeDirectory === `players/${slug}`)?.node?.childImageSharp

    const getPlayerPhotos = (slug: string) => images.images.edges
        .filter(i => i.node.relativeDirectory === `players/${slug}`)
        .map(i => i?.node?.childImageSharp)

    const birthday = moment(player.birthday, 'DD-MM-YYYY')

    return (
        <Layout title={player.name}>
            <Header />
            <S.Wrapper>
                <S.Title>
                    Hráčský profil
            </S.Title>
                <S.Box>
                    <S.ImageWrapper>
                        <Img
                            alt="player thumbnail"
                            fixed={getPlayerThumbnail(player.slug)?.fluid}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </S.ImageWrapper>
                    <S.Info>
                        <S.Name>{player.name}</S.Name>
                        <S.Text>{player.type}</S.Text>
                        <S.Section>
                            <S.SectionTitle>Číslo</S.SectionTitle>
                            <S.Text>#{player.number}</S.Text>
                        </S.Section>
                        <S.Section>
                            <S.SectionTitle>Narození / Věk</S.SectionTitle>
                            <S.Text>{birthday.format('D. M. YYYY')} / {moment().diff(birthday, 'years')} let</S.Text>
                        </S.Section>
                        <S.Section>
                            <S.SectionTitle>Povolání</S.SectionTitle>
                            <S.Text>{player.proffesion}</S.Text>
                        </S.Section>
                    </S.Info>
                </S.Box>
                <S.Photos>
                    {
                        getPlayerPhotos(player.slug)?.map((photo, index) => (
                            <S.PhotoWrapper href={photo?.original?.src} target='_blank' key={index}>
                                <Img
                                    alt="player photo"
                                    fixed={photo?.fixed}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </S.PhotoWrapper>
                        ))
                    }
                </S.Photos>
            </S.Wrapper>
            <Partners/>
            <Footer />
        </Layout>
    )

}