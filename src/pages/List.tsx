import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import { useInfiniteQuery } from 'react-query'
import useInView from 'react-cool-inview'
import { Card } from '@components/Card'

import * as openSeeApi from '@services/openSee'
import { ReactComponent as LoadingSvg } from '@images/loading.svg'

const List: React.FC<RouteComponentProps> = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'listPage',
    async ({ pageParam }) => {
      try {
        const result = await openSeeApi.getList({ offset: pageParam })
        return result.data.assets
      } catch (err) {
        console.log(err)
      }
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 20) return undefined
        return pages.flat().length
      },
    },
  )

  const { observe } = useInView({
    rootMargin: '50px 0px',
    // When the last item comes to the viewport
    onEnter: async ({ unobserve, observe }) => {
      // Pause observe when loading data
      unobserve()
      // Load more data
      await fetchNextPage()

      observe()
    },
  })

  if (!data)
    return (
      <Footer>
        <LoadingWrap ref={observe}>
          <LoadingSvg width="40px" height="40px" />
        </LoadingWrap>
      </Footer>
    )

  return (
    <>
      <Header>List</Header>
      <Content>
        {data.pages.flat().map((item, i) => {
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
      <Footer>
        {hasNextPage && (
          <LoadingWrap ref={observe}>
            <LoadingSvg width="40px" height="40px" />
          </LoadingWrap>
        )}
      </Footer>
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

const Footer = styled.div`
  display: flex;
  justify-content: center;
`

const LoadingWrap = styled.div`
  padding: 10px;
  background-color: #000;
  fill: #fff;
`
