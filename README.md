# User Listing App

This project is a React frontend application that fetches random user data from the [Random User API](https://randomuser.me/api/) and displays it in a user-friendly interface. It allows users to view a list of users, apply filters, search for users, and view individual user profiles.

## Table of Contents
- [Running the Codebase Locally](#running-the-codebase-locally)
- [Developer Notes](#developer-notes)
- [Exercise Questions](#exercise-questions)

## Running the Codebase Locally

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/user-listing-app.git


2. Navigate to the project directory:
```bash
cd kwanso-fe-challenge


3. Install dependencies:
```bash
npm install


4. Start the development server:
```bash
npm start


5. Open your browser and visit `http://localhost:3000` to view the application.

## Developer Notes

### Project Structure

The project follows a standard React project structure with components organized into separate files and directories under the `src` directory. Here's a brief overview of the project structure:

- `src/components`: Contains React components such as `UserList`, `UserProfile`, etc.
- `src/types`: Contains TypeScript type definitions for API responses and other data structures.
- `src/App.tsx`: Main component that serves as the entry point to the application.
- `src/index.tsx`: Entry point of the application where React is rendered into the DOM.

### Component Structure and Thought Process

- **UserList Component**: This component fetches user data from the API and displays it in a list format. It includes pagination, filtering, and searching functionalities. The list is initially displayed as a table to improve readability and user experience.

- **UserProfile Component**: This component displays detailed information about an individual user. It includes the user's profile picture, name, email, location, etc. Users can navigate to this component by clicking on a user's name in the user list.

### Styling

- The project uses Tailwind CSS for styling to create a clean and modern UI.
- Components are styled using Tailwind CSS utility classes to maintain consistency and improve maintainability.

## Exercise Questions

### How did you structure your components?

- Components are structured into separate files and directories based on their functionality.
- Each component is responsible for a specific part of the UI and follows the principles of separation of concerns.

### How did you approach implementing the features and functionalities?

- I followed a step-by-step approach to implement each feature, starting with basic functionality and gradually adding enhancements.
- I utilized React hooks for state management and Axios for making API requests.
- I paid attention to code readability, maintainability, and performance while implementing the features.

### Did you encounter any challenges during the implementation? If so, how did you overcome them?

- One challenge was handling API requests and managing state updates effectively, especially when dealing with pagination and filtering.
- To overcome this, I carefully designed the component architecture and utilized React's useEffect hook to manage side effects.
- I also used TypeScript to catch potential errors early in the development process and ensure type safety.



