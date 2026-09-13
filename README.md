# DevStack Builder

DevStack Builder is a small React project where users can explore common development technologies and create their own stack by selecting the tools they want to use.

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS
- JSON
- React Toastify
- Lucide React

## Main Features

- Technology information is loaded from a JSON file.
- Users can add technologies to their personal stack and remove them later.
- Duplicate technologies are blocked and users get feedback through toast notifications.
- The layout is responsive for desktop, tablet, and mobile screens.
- A loading state is shown while the technology data is being fetched.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like elements inside JavaScript. It makes React components easier to read because the structure of the UI stays close to the JavaScript logic that controls it.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child component. State belongs to a component and can change while the application is running. When state changes, React updates the related part of the UI.

### 3. What does useState do, and where did you use it?

`useState` lets a component keep track of values that can change. In this project, it is used for the loaded technology data, the selected stack, and the mobile navigation menu.

### 4. What does useEffect do, and why is it needed?

`useEffect` is used for side effects that happen outside the normal rendering process. Here, it runs once when the app loads so the technology data can be fetched from `technologies.json`.

### 5. Why does map need a unique key?

React uses the key to tell different items in a list apart. A unique key helps React update only the items that actually changed instead of rebuilding the whole list.

### 6. What is conditional rendering?

Conditional rendering means displaying different UI depending on a condition. For example, the stack shows an empty-state message when no technologies have been selected, and shows the selected technologies when the stack is not empty.

### 7. How does parent-child data communication work?

A parent component can send data or functions to a child through props. In this project, `App` passes the technology data and event handlers to the child components, while those components use the handlers when the user adds or removes a technology.
