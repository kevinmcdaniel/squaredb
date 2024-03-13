// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import HomeLayout from 'src/layouts/HomeLayout/HomeLayout'
import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="People" titleTo="people" buttonLabel="New Person" buttonTo="newPerson">
        <Route path="/people/new" page={PersonNewPersonPage} name="newPerson" />
        <Route path="/people/{id:Int}/edit" page={PersonEditPersonPage} name="editPerson" />
        <Route path="/people/{id:Int}" page={PersonPersonPage} name="person" />
        <Route path="/people" page={PersonPeoplePage} name="people" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
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
