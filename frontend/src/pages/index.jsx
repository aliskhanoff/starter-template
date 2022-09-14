import { Router } from '@reach/router'
import { Index, NotFound } from './home'


export const AnonymouseRoutes = () => {
  return (
    <Router>
      <Index path="/" />
      <NotFound path="/notfound" default/>
    </Router>
  )
}

export default AnonymouseRoutes