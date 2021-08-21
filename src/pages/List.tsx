import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'

const List: React.FC<RouteComponentProps> = () => {
  return <Header>List</Header>
}

export default List

const Header = styled.div`
  display: flex;
  justify-content: center;
`
