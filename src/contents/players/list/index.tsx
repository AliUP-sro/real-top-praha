import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import playersData from '../../../data/players.json'

import * as S from './styles'

export default () => {

    const images = useStaticQuery(graphql`
    {
        thumbnails: allFile(filter: {relativeDirectory: {regex: "^galery/players/"}, name: {eq: "thumbnail"}}) {
          edges {
            node {
              id
              relativeDirectory
              childImageSharp {
                fluid(maxHeight: 400, quality: 20) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

    const getPlayerThumbnail = (slug: string) => 
        images.thumbnails.edges.find(i => i.node.relativeDirectory === `players/${slug}`)?.node?.childImageSharp?.fluid

    const [type, setType] = useState('Osobnost sportu')

    const changeType = type => () => setType(type)

    const players = playersData.filter(p => p.type === type)

    return (
        <S.Wrapper>
            <S.Title>
                Hráči
            </S.Title>
            <S.Selection>
                <S.SelectionItem active={type === 'Osobnost sportu'} onClick={changeType('Osobnost sportu')}>Osobnosti sportu</S.SelectionItem>
                <S.SelectionItem active={type === 'Osobnost kultury'} onClick={changeType('Osobnost kultury')}>Osobnosti kultury</S.SelectionItem>
            </S.Selection>
            <S.List>
                {
                    players.map((player, index) => (
                        <S.ListItem to={`/player/${player.slug}`} key={index}>
                            <S.ListItemImage>
                                <Img
                                    alt="player image"
                                    fluid={getPlayerThumbnail(player.slug)}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </S.ListItemImage>
                            <S.ListItemName>
                                {player.name.split(' ')[0]} 
                                <br/>
                                {player.name.split(' ')[1]}
                            </S.ListItemName>
                        </S.ListItem>
                    ))
                }
            </S.List>
        </S.Wrapper>
    )
}