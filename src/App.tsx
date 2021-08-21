import React from 'react'
import { Router } from '@reach/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import List from '@pages/list'
import DetailPage from '@pages/DetailPage'

const queryClient = new QueryClient()

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <List path="/" />
      <DetailPage path="assets/:address/:tokenId" />
    </Router>
  </QueryClientProvider>
)

export default App
