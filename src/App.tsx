import React from 'react'
import { Router } from '@reach/router'
import List from '@pages/list'

const App: React.FC = () => (
  <Router>
    <List path="/" />
  </Router>
)

export default App
