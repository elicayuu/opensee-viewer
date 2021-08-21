import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import { useQuery } from 'react-query'

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
  console.log(data)
  return (
    <>
      <Header>List</Header>
    </>
  )
}

export default List

const Header = styled.div`
  display: flex;
  justify-content: center;
`
