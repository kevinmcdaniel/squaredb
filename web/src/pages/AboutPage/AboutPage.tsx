import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />

      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </p>
        <Link to={routes.home()}>Return home</Link>
      </main>

      <p> 
        we are all about square dance info here.  We also have
        dancer tracking with events / classes and accumen ratings.
      </p>
      <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
    </>
  )
}

export default AboutPage
