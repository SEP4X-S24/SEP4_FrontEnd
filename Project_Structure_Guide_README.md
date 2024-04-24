# Project Structure Guide 📁

This README outlines the structure and conventions of our codebase. It is crucial for team members to adhere to these guidelines to maintain consistency and manageability.

## Directory Structure 🏗️

Here is the directory structure for our project:

```
src/
|-- components/ 🧩
|   |-- Footer/
|   |   |-- Footer.css
|   |   |-- Footer.tsx
|   |-- Header/
|   |   |-- Header.css
|   |   |-- Header.tsx
|-- images/ 🖼️
|-- pages/ 📄
|   |-- Home/
|   |   |-- components/
|   |   |   |-- About/
|   |   |   |   |-- HomeAbout.tsx
|   |   |-- HomePage.tsx
|   |   |-- HomePageStyles.css
|   |-- Profile/
|   |-- Recommendation/
|-- services/ ⚙️
|   |-- HomeServices.ts
|-- styles/ 👗
|   |-- App.css
|-- App.test.tsx 🧪
|-- App.tsx 📱
|-- index.tsx 📑
```

## Components 🧩

- Components are reusable parts of our UI and are placed in the `src/components/` directory.
- Each component has its own folder with a `.tsx` file for the component logic and a `.css` file for the styling.

## Pages 📄

- The `src/pages/` directory contains the different pages of our application.
- Each page has its own folder. If a page consists of multiple components, they should be placed in a `components/` subfolder within the respective page folder.

## Services ⚙️

- The `src/services/` directory holds the services that provide business logic, like API calls.

## Styles 👗

- The `src/styles/` folder contains global styles for the application.

## Naming Conventions 📛

- Use PascalCase for React components and CamelCase for their instances.
- Use kebab-case for CSS files.
- Services and utility files should be in CamelCase.

## Getting Started 🚀

Clone the repository and navigate into your new folder, then follow the setup instructions specific to our project.

```
git clone <repository-url>
cd <project-name>
```

Install dependencies and start the development server:

```
npm install
npm start
```

Happy coding! 😄

---

This README is provided to ensure a uniform structure across the development team.
