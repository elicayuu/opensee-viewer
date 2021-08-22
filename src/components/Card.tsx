import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

interface Card {
  to: string
  imgUrl: string
  name: string
}

export const Card: React.FC<Card> = ({ to, imgUrl, name }) => {
  return (
    <LinkCard to={to}>
      <Image>
        <img src={imgUrl} />
      </Image>
      <Text>{name}</Text>
    </LinkCard>
  )
}

const LinkCard = styled(Link)<{ to: string }>`
  display: block;
  width: 100%;
  border: 1px solid #eee;

  &:link,
  &:visited {
    color: #000;
    text-decoration: none;
  }
`

const Image = styled.div`
  width: 100%;

  & > img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const Text = styled.div`
  margin: 1em;
  text-align: center;
`
