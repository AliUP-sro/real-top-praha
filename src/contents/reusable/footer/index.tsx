import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import * as S from './styles'

export default () => {

    const breakpoints = useBreakpoint();

    const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconFb: file(relativePath: { eq: "icon_fb.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconLinkedin: file(relativePath: { eq: "icon_in.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconInstagram: file(relativePath: { eq: "icon_instagram.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconTwitter: file(relativePath: { eq: "icon_twitter.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconYt: file(relativePath: { eq: "icon_yt.png" }) {
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
            <S.TopRow>
            <S.LogoWrapper>
            <Img
                alt=""
                fluid={data.logo.childImageSharp.fluid}
                style={{
                    width: '50px'
                }}
            />
            </S.LogoWrapper>

            {!breakpoints.lg && <S.Text>Copyright 2020 Real Top Praha & eSports.cz, s.r.o.</S.Text>}

            <S.SocialRow>
            <S.SocialIconWrapper href='https://www.facebook.com/RealTopPraha' target='_blank'>
              <Img
                alt=""
                fluid={data.iconFb.childImageSharp.fixed}
                style={S.socialIconStyle}
              />
            </S.SocialIconWrapper>
            <S.SocialIconWrapper href='https://www.linkedin.com/company/66956053' target='_blank'>
              <Img
                alt=""
                fluid={data.iconLinkedin.childImageSharp.fixed}
                style={S.socialIconStyle}
              />
            </S.SocialIconWrapper>
            <S.SocialIconWrapper href='https://www.instagram.com/realtoppraha/' target='_blank'>
              <Img
                alt=""
                fluid={data.iconInstagram.childImageSharp.fixed}
                style={S.socialIconStyle}
              />
            </S.SocialIconWrapper>
            <S.SocialIconWrapper href='https://twitter.com/RealTopPraha' target='_blank'>
              <Img
              alt=""
              fluid={data.iconTwitter.childImageSharp.fixed}
              style={S.socialIconStyle}
            />
            </S.SocialIconWrapper>
            <S.SocialIconWrapper  href='https://www.youtube.com/channel/UC4EYV4uYnJJH_Mzijms3G2A' target='_blank'>
              <Img
                alt=""
                fluid={data.iconYt.childImageSharp.fixed}
                style={S.socialIconStyle}
              />
            </S.SocialIconWrapper>
            </S.SocialRow>
            </S.TopRow>
            
            {breakpoints.lg && <S.Text>Copyright 2020 Real Top Praha & eSports.cz, s.r.o.</S.Text>}
           
        </S.Wrapper>
    )
}