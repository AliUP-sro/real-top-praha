import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import * as S from './styles'

export default () => {
  const data = useStaticQuery(graphql`
    query {
    logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          original {
                    src
                }
        }
      }
      iconFb: file(relativePath: { eq: "icon_fb_blue.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconLinkedin: file(relativePath: { eq: "icon_in_blue.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconInstagram: file(relativePath: { eq: "icon_instagram_blue.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconTwitter: file(relativePath: { eq: "icon_twitter_blue.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconYt: file(relativePath: { eq: "icon_yt_blue.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.Title>Kontakt</S.Title>
      <S.Row>
        <S.RowBox>
          <S.Section>
            <S.SectionTitle>Alexandr Smita</S.SectionTitle>
            <S.SectionText>Předseda spolku a zakladatel týmu</S.SectionText>
          </S.Section>
          <S.Section>
            <S.SectionText>Telefonní číslo:</S.SectionText>
            <S.SectionTitle>+420 608 225 039</S.SectionTitle>
          </S.Section>
          <S.Section>
            <S.SectionText>Email:</S.SectionText>
            <S.SectionTitle>realtoppraha@gmail.com</S.SectionTitle>
          </S.Section>
          <S.Section>
            <S.SectionText>Společnost:</S.SectionText>
            <S.SectionTitle>Real TOP Praha, z.s</S.SectionTitle>
          </S.Section>
          <S.Section>
            <S.SectionText>Se sídlem:</S.SectionText>
            <S.SectionTitle>U Hostína 1775, Úvaly, PSČ: 250 82</S.SectionTitle>
          </S.Section>
          <S.Section>
            <S.SectionText>IČO:</S.SectionText>
            <S.SectionTitle>26999676</S.SectionTitle>
          </S.Section>
          <S.Section>
            <S.SectionTitle></S.SectionTitle>
            <S.SectionText>Ve Spolkovém rejstříku vedeném u Městského soudu v Praze, v odd.L, vložce č. 15754</S.SectionText>
          </S.Section>
          <S.Section>
            <S.SectionText>Bankovní spojení:</S.SectionText>
            <S.SectionText>Raiffeisenbank, a.s., <b>č.ú. 112627/5500</b></S.SectionText>
          </S.Section>
          <S.Section>
            <S.SectionText>Zastoupená:</S.SectionText>
            <S.SectionTitle>Alexandrem Smitou, předsedou z.s.</S.SectionTitle>
          </S.Section>
        </S.RowBox>
        <S.RowBox>
          <S.SocialRow href='https://www.facebook.com/RealTopPraha' target='_blank'>
            <S.SocialIconWrapper >
              <Img
                alt=""
                fluid={data.iconFb.childImageSharp.fixed}
                style={{ width: '100%', height: '100%' }}
              />
            </S.SocialIconWrapper>
                        Real Top Praha
                    </S.SocialRow>
          <S.SocialRow  href='https://www.linkedin.com/company/66956053' target='_blank'>
            <S.SocialIconWrapper>
              <Img
                alt=""
                fluid={data.iconLinkedin.childImageSharp.fixed}
                style={{ width: '32px', height: '32px', marginRight: '8px' }}
              />
            </S.SocialIconWrapper>
                        Real Top Praha
                    </S.SocialRow>
          <S.SocialRow href='https://www.instagram.com/realtoppraha/' target='_blank'>
            <S.SocialIconWrapper >
              <Img
                alt=""
                fluid={data.iconInstagram.childImageSharp.fixed}
                style={{ width: '32px', height: '32px', marginRight: '8px' }}
              />
            </S.SocialIconWrapper>
                        @realtoppraha
                    </S.SocialRow>
          <S.SocialRow href='https://twitter.com/RealTopPraha' target='_blank'>
            <S.SocialIconWrapper >
              <Img
                alt=""
                fluid={data.iconTwitter.childImageSharp.fixed}
                style={{ width: '32px', height: '32px', marginRight: '8px' }}
              />
            </S.SocialIconWrapper>
                        @RealTopPraha
                    </S.SocialRow>
          <S.SocialRow href='https://www.youtube.com/channel/UC4EYV4uYnJJH_Mzijms3G2A' target='_blank'>
            <S.SocialIconWrapper>
              <Img
                alt=""
                fluid={data.iconYt.childImageSharp.fixed}
                style={{ width: '32px', height: '32px', marginRight: '8px' }}
              />
            </S.SocialIconWrapper>
                        Real Top Praha
                    </S.SocialRow>
        </S.RowBox>
      </S.Row>
      <S.Title>Ke stažení</S.Title>
      <S.DownloadAnchor href={data.logo.childImageSharp.original.src} download={'realtoppraha_logo.png'}>- Logo Real TopPraha (.svg)</S.DownloadAnchor>
    </S.Wrapper>
  )
}