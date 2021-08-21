import React from 'react'
import { Router } from '@reach/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import List from '@pages/list'

const queryClient = new QueryClient()

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <List path="/" />
    </Router>
  </QueryClientProvider>
)

export default App
