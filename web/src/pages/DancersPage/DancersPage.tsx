import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const DancersPage = () => {
  return (
    <>
      <Metadata title="Dancers" description="Dancers page" />

      <h1>DancersPage</h1>
      <p>
        Find me in <code>./web/src/pages/DancersPage/DancersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>dancers</code>, link to me with `
        <Link to={routes.dancers()}>Dancers</Link>`
      </p>
    </>
  )
}

export default DancersPage
