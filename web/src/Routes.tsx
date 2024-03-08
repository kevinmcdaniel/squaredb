// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HomeLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={AdminLayout}>
        <Route path="/dancers" page={DancersPage} name="dancers" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
