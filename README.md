### **Project Documentation: Pawfect Companion Web Application**

## **Tech Stack**

 - Frontend: React.js (with Hooks)

 - Styling: CSS3 (with custom styles and animations)

 - HTTP Client: Axios

 - Routing: React Router DOM

  -State Management: useState, useEffect (React Hooks)

  -API Communication: Fetch API with authentication

  -Deployment :  Netlify

## **Features**

**1. User Authentication**

Users enter their Name and Email on the login page.

The app sends authentication data to the API and receives an authentication token.

Once authenticated, users are redirected to the Search Page.

**2. Dog Search & Filtering**

Users can search for dogs by selecting a breed from a dropdown menu.

Clicking the Search button fetches a list of dogs based on the selected breed.

Each dog card displays:

-Dog Image

-Name, Breed, and Age

-A Favorite button to add/remove the dog from favorites.


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

 - Search (Dog search page)

 - Favorites (Saved favorite dogs)

 - Find Match (Navigate to match page)

 - Logout (Returns to the login screen)

 - The side pane automatically collapses when the mouse leaves the area.


## **Navigation Flow & Page Transitions**

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

---
## **Functionalities**
---
**Handling "All" Option**

- When users select "All," the application fetches and displays dogs from all available breeds.
- Uses efficient API calls to fetch dogs for all breeds and aggregates results.
- Improved Sorting
- Sorts results alphabetically by breed.
- Users can toggle between ascending and descending order dynamically.

**Enhanced Pagination**
- Displays a maximum of 3 pages at a time for better navigation.
- Handles dynamic page ranges and enables users to navigate through long result sets efficiently.

**Error Resilience**
- Handles API failures gracefully with clear and actionable error messages.
- Improves user experience by preventing crashes or hanging UI when API requests fail.

---
All pages maintain authentication (protected routes using withCredentials: true).

The UI is designed to be intuitive, user-friendly, and visually appealing.

The app follows best coding practices, accessibility standards, and efficient API handling.


--------------------------------------------------------------------------------------------------------

### **Setup Guide: Running the Dog Adoption Web Application Locally**

---

## **Prerequisites**
To run this project on your local system, ensure you have the following installed:

### **1. Required Software:**
- **Node.js** (Latest LTS version) - [Download Here](https://nodejs.org/)
- **Visual Studio Code (VS Code)** - [Download Here](https://code.visualstudio.com/)
- **Git** (Optional, but recommended) - [Download Here](https://git-scm.com/)

### **2. Verify Installations:**
After installation, open a terminal (Command Prompt, PowerShell, or VS Code Terminal) and run the following commands:
```sh
node -v   # Check Node.js version
npm -v    # Check npm version
git --version  # Check Git version (if installed)
```

You should see version numbers if everything is installed correctly.

---

## **Step-by-Step Setup**

### **1. Clone or Download the Project**
If you have Git installed, use the following command to clone the project repository:

```sh
git clone https://github.com/your-repository-url.git
```

If you don’t have Git, download the ZIP file from the repository and extract it.

### **2. Navigate to the Project Folder**
Open the terminal and change the directory to the project folder:

```sh
cd fetch-dog-adoption-app  # Replace with your actual project folder name
```

### **3. Install Dependencies**
Run the following command to install required Node.js packages:

```sh
npm install
```

This will install all dependencies mentioned in the `package.json` file.

---

## **Running the Application Locally**

### **1. Start the Development Server**
Run the following command in the terminal:

```sh
npm start
```

This will start the React development server and automatically open the application in your default browser at:

```
http://localhost:3000/
```

### **2. If the App Doesn’t Start Automatically**
Open your browser and manually enter the URL:

```
http://localhost:3000/
```

---

## **Stopping the Application**
To stop the React development server, press:

```
CTRL + C (Windows/Linux)
Command + C (Mac)
```

If prompted, type `Y` and press **Enter**.

---

## **Additional Commands**

### **1. Building the Project for Production**
To create an optimized build of the application, run:

```sh
npm run build
```

This generates a `build/` folder containing optimized static files that can be deployed.

### **2. Running the Project on a Different Port**
By default, the app runs on **port 3000**. To change this, run:

```sh
set PORT=5000 && npm start   # Windows
export PORT=5000 && npm start  # macOS/Linux
```

Then, open `http://localhost:5000/` in your browser.

---

## **Troubleshooting**

### **1. If `npm install` Fails**
Try deleting `node_modules` and reinstalling dependencies:

```sh
rm -rf node_modules package-lock.json  # macOS/Linux
del node_modules package-lock.json     # Windows
npm install
```

### **2. If the App Fails to Start**
- Make sure **Node.js** is installed.
- Ensure **port 3000** is not in use.
- Run `npm audit fix` to resolve package issues.

---





