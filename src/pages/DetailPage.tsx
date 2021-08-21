import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import { useQuery } from 'react-query'

import * as openSeeApi from '@services/openSee'
import arrowBackUrl from '@images/arrow_back.svg'

interface DetailPageProps extends RouteComponentProps {
  address?: string
  tokenId?: number
}

const DetailPage: React.FC<DetailPageProps> = ({ address, tokenId }) => {
  const { data } = useQuery(['detailPage', address, tokenId], async () => {
    try {
      const result = await openSeeApi.getDetail(address, tokenId)
      return result.data
    } catch (err) {
      console.log(err)
    }
  })

  if (!data) return <div>loading</div>

  return (
    <Root>
      <Header>
        <Back>
          <Link to="/">
            <img src={arrowBackUrl} />
          </Link>
        </Back>
        {data.collection.name}
      </Header>
      <Body>
        <Image>
          <img src={data.image_url} />
        </Image>
        <Info>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </Info>
      </Body>
      <Permalink>
        <a href={data.permalink}>Permalink</a>
      </Permalink>
    </Root>
  )
}

export default DetailPage

const Root = styled.div`
  padding-bottom: 50px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`

const Back = styled.div`
  margin-right: 10px;
`

const Body = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

const Image = styled.div`
  width: 100%;

  & > img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: 768px) {
    width: 400px;
    flex-shrink: 0;
  }
`

const Info = styled.div`
  max-width: 600px;
`

const Permalink = styled.a`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: #eee;
  background-color: #000;

  & a:link,
  & a:visited {
    color: #eee;
  }
`
