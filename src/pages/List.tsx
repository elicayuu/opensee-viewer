import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { Card } from '@components/Card'

import * as openSeeApi from '@services/openSee'

const List: React.FC<RouteComponentProps> = () => {
  const { data } = useQuery('listPage', async () => {
    try {
      const result = await openSeeApi.getList()
      return result.data.assets
    } catch (err) {
      console.log(err)
    }
  })

  if (!data) return null

  return (
    <>
      <Header>List</Header>
      <Content>
        {data.map((item, i) => {
          return (
            <Card
              to={`/assets/${item.asset_contract.address}/${item.token_id}`}
              imgUrl={item.image_url}
              name={item.name}
              key={i}
            />
          )
        })}
      </Content>
    </>
  )
}

export default List

const Header = styled.div`
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 20px;

  @media (min-width: 860px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
