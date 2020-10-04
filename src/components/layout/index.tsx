import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider, DefaultTheme } from 'styled-components'

import SEO from '../seo'

import '../../styles/normalize.css'
import '../../styles/main.css'

import * as S from './styles'

type Props = {
  children: any
  title: string
}

const theme: DefaultTheme = {
  colors: {
    blue: '#215A7D',
    darkBlue: '#0D457A',
    red: '#EE2E24',
    darkRed: '#BF241C'
  }
}

const Layout = ({ children, title }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <SEO title={title} />
        {children}
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout
