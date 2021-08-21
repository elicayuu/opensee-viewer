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
    <Content>
      <Link to={to}>
        <Image>
          <img src={imgUrl} />
        </Image>
        <Text>{name}</Text>
      </Link>
    </Content>
  )
}

const Content = styled.div`
  width: 100%;
  border: 1px solid #eee;
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
