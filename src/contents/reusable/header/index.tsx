import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { slide as Menu } from "react-burger-menu"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { useTheme } from 'styled-components'

import * as S from './styled'

//@ts-expect-error
import Cross from '../../../images/cross.svg'

//@ts-expect-error
import Burger from '../../../images/burger.svg'

const IndexPage = () => {

  const theme = useTheme()

  const breakpoints = useBreakpoint()

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "header-image.jpeg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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

  const styles = {
    bmCrossButton: {
      height: "24px",
      width: "24px",
      margin: '16px',
    },
    bmMenuWrap: {
      position: "fixed",
      top: '0px',
    },
    bmMenu: {
      // @ts-expect-error
      background: theme.colors.blue,
      padding: "40px",
    },
    bmItemList: {
      display: "flex",
      flexDirection: "column",
      padding: "40px 8px 8px 8px",
    },
    bmItem: {
      margin: "8px 0",
      fontSize: "1.2rem",
    },
  }

  const [open, setOpen] = useState(false)

  return (
    <>
      <S.Wrapper>
        <Img
          alt=""
          fluid={data.image.childImageSharp.fluid}
          style={{
            height: '100%'
          }}
        />
        <S.FrontDrop />
        <S.Menu>
          <Img
            alt=""
            fluid={data.logo.childImageSharp.fluid}
            style={{
              width: '80px'
            }}
          />
          {
            breakpoints.md ? (
              <S.Burger onClick={() => setOpen(!open)} src={Burger} />
            ) : (
                <S.MenuItems>
                  <S.MenuItem to='/'>Domů</S.MenuItem>
                  <S.MenuItem to='/players'>Hráči</S.MenuItem>
                  <S.MenuItem to='/partners'>Partneři</S.MenuItem>
                  <S.MenuItem to='/contact'>Kontakt</S.MenuItem>
                </S.MenuItems>
              )
          }
        </S.Menu>
        <S.Content>
          <S.TopBox>
            Charitativní sportovní tým
        </S.TopBox>
          <S.Title>
            REAL <S.RedTitle>TOP</S.RedTitle> PRAHA
        </S.Title>
          <S.RedCountBar>
            Ke dnešku jsme vybrali: <strong style={{ marginLeft: '8px' }}>25.725.198 Kč</strong>
          </S.RedCountBar>
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
        </S.Content>
      </S.Wrapper>
      {
        breakpoints.md && (
          <Menu
            isOpen={open}
            right
            width={300}
            customBurgerIcon={false}
            customCrossIcon={<img alt="icon" src={Cross} />}
            disableAutoFocus
            styles={styles}
            noOverlay
            onClose={() => setOpen(false)}
          >
            <S.MenuItem to='/'>Domů</S.MenuItem>
            <S.MenuItem to='/players'>Hráči</S.MenuItem>
            <S.MenuItem to='/partners'>Partneři</S.MenuItem>
            <S.MenuItem to='/contact'>Kontakt</S.MenuItem>
          </Menu>
        )
      }
    </>
  )
}



export default IndexPage
