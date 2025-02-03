**Project Documentation: Pwfect Companion Web Application**

**Tech Stack**

**The Dog Adoption Web Application is built using the following technologies:**

Frontend: React.js (with Hooks)

Styling: CSS3 (with custom styles and animations)

HTTP Client: Axios

Routing: React Router DOM

State Management: useState, useEffect (React Hooks)

API Communication: Fetch API with authentication

Deployment :  Netlify

**Features**

**1. User Authentication**

Users enter their Name and Email on the login page.

The app sends authentication data to the API and receives an authentication token.

Once authenticated, users are redirected to the Search Page.

**2. Dog Search & Filtering**

Users can search for dogs by selecting a breed from a dropdown menu.

Clicking the Search button fetches a list of dogs based on the selected breed.

Each dog card displays:

Dog Image

Name, Breed, and Age

A Favorite button to add/remove the dog from favorites.


**3. Favorites Management**

Users can favorite/unfavorite a dog.

Favorited dogs are listed in the Favorites Page.

Clicking the Find Match button initiates the match process.

**4. Finding the Perfect Match**

The Match Page selects the best match from the user’s favorites.

The matched dog’s details (image, breed, location) are displayed.

If no favorites are selected, the page prompts the user to add favorites.

**5. Navigation & Side Menu**

The application includes a side navigation pane accessible via a menu button (☰).

The menu expands/collapses and contains:

Search (Dog search page)

Favorites (Saved favorite dogs)

Find Match (Navigate to match page)

Logout (Returns to the login screen)

The side pane automatically collapses when the mouse leaves the area.


**Navigation Flow & Page Transitions**

**1. Login Page → Search Page**

User logs in → App authenticates → Redirects to Search Page

**2. Search Page → Favorites Page**

User searches for dogs → Clicks Favorite button → Navigates to Favorites Page

**3. Favorites Page → Match Page**

User selects favorite dogs → Clicks Find Match → Redirects to Match Page

**4. Side Menu Navigation**

Menu (☰) opens side pane → User selects Search, Favorites, Match, or Logout

Menu auto-collapses when the mouse leaves the area.

**5. Logout → Back to Login Page**

Clicking Logout clears authentication and redirects to Login Page.



All pages maintain authentication (protected routes using withCredentials: true).

The UI is designed to be intuitive, user-friendly, and visually appealing.

The app follows best coding practices, accessibility standards, and efficient API handling.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
