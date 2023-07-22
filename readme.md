# React Mastery

## Prerequisites

- Node.js
- VS Code (or any other code editor)
- Browser (Chrome/Firefox/...)

### Important Things to Note

- We are using Vite to create a React app as it is a faster way to set up a React project.
- We will be using JSX in this project, and Vite automatically provides files with the .jsx extension.
- We will cover JSX syntax in detail later.

### Getting Started

1. Download and install the latest LTS (Long-Term Support) version of Node.js, as it is the stable version.
2. After installing Node.js, verify the installation by running the command `node -v`. If it gives an error, there might be a mistake in the installation.
3. Create your first React app using the following command: `npm create vite@latest`.
   - For the project name, you can use "." if you don't want to create an additional folder.
   - Choose the framework as React (Vite supports various frameworks).
   - Select the variant as JavaScript.
4. After creating the app, navigate to the project directory and install all dependencies using the command `npm i`.
5. Start the development server using `npm run dev`.
6. The main files of the project are located inside the `src` folder: `app.jsx` and `main.jsx`.

Congratulations! Your first React app is now running, and you can view it in your browser.

### Setting up the Boilerplate

To set up the boilerplate, follow these steps:

1. Inside the `src` folder, delete the `index.css` and `app.css` files.
2. In `main.jsx`, remove the line `import './index.css'`.
3. In `app.jsx`, delete all the existing lines.
4. Replace the content of `app.jsx` with the following code:

```jsx
function App() {
  return "Hello world";
}

export default App;
```

This syntax will be explained in more detail later.

### Exploring JSX

JSX allows you to write HTML inside JavaScript. It's easy to use JSX. For example, to create an `h1` tag, you can write the following code inside the `App` function:

```jsx
function App() {
  return <h1>Hello World</h1>;
}

export default App;
```

If you want to write multiple lines of JSX code, you cannot write them directly without enclosing them. The following code will result in an error:

```jsx
function App() {
  return <h1>Hello World</h1> <p>Hello World</p>;
}

export default App;
```

To fix this, enclose the elements within parentheses `()` and use empty brackets (called as React Fragments) `<>` like this:

```jsx
function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Hello World</p>
    </>
  );
}

export default App;
```

Here are some basics of JSX:

- Inside the `return` statement, wrap the JSX code in parentheses `()` when it spans multiple lines.
- If there are multiple adjacent elements, they should be enclosed within a parent element, such as a `div`, or by using empty brackets (called as React Fragments) `<>`.
- JSX attribute names follow camel case instead of using hyphens. For example, use `ariaExpanded` instead of `aria-expanded`.
- Some reserved keywords in JSX, like `class` and `for`, cannot be used as attribute names. Instead, use `className` for `class` and `htmlFor` for `for`.
- To write JavaScript expressions inside JSX, use curly braces `{}`. For example: `<div> <h1>{3 + 3 * 5}</h1> </div>`.
- To apply inline styles, use the `style` attribute with a JavaScript object syntax. For example: `style={{ background: "red", borderTop: "3px solid black" }}`.
- Self-closing tags should be written with a trailing slash, such as `<input type="number" />`. Alternatively, you can also write them as `<input type="number"></input>`.
- You can store JSX elements in variables, like `let instaId = <span>developer_ayush</span>`. Remember to define variables outside the `return` statement.
- You can then use the variable inside JSX, such as `<h1>Ayush's Instagram ID is {instaId}</h1>`.

## What is a Component?

In React, components are the building blocks of a user interface. They represent reusable and independent pieces of code that encapsulate a specific functionality and return HTML (or JSX) to be rendered on the screen. Components in React can be compared to JavaScript functions, as they serve a similar purpose but work in isolation.

React components allow you to break down your UI into smaller, self-contained elements, making it easier to manage and maintain your code. Each component can have its own logic, state, and props, allowing for reusability and modular development.

There are two types of components in React:

1. **Class Components:** Class components are defined using ES6 classes and extend the `React.Component` class. They have more advanced features, such as local state and lifecycle methods. However, we will focus on function components, as class components are being deprecated soon.

2. **Function Components:** Function components are defined as JavaScript functions. They take in `props` as input and return JSX as output. Function components are simpler and more lightweight than class components. They have become the preferred way of writing components in modern React applications.

## How to Create Components

To create a component in React, follow these steps:

1. Determine the functionality or purpose of the component you want to create. Components should be independent and reusable pieces of code that represent specific UI elements or logic.

2. Decide whether to create a class component or a function component. For this document, we will focus on function components.

3. Create a new file with the `.jsx` extension in the desired location within your project's source code. It's common practice to create a separate folder, such as `components`, to store all your components for better organization and maintainability.

4. Make sure to start the file name with **capital letter**

5. Define your component as a JavaScript function. Give the function a name that starts with a capital letter. For example, if you are creating a navigation component, you can name it `Navigation`. **it is recomanded that function name and file name should be same name** 

6. Inside the component function, write the JSX code that represents the desired UI element or logic. For example, if you are creating a navigation component, you can write the JSX for a navigation bar with menu items.

7. Finally, export the component function using the `export` keyword. This allows other files to import and use the component.

```jsx
export function Navigation() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
```

8. In the file where you want to use the component, import it using the appropriate path. If the component is stored in a separate folder, include the folder name as part of the import statement.

```jsx
import { Navigation } from "./components/Navigation";
```

9. Now, you can use the component as a JSX element in the desired location within your code.

```jsx
function App() {
  return (
    <>
      <Navigation />
      <h1>Ayush Shah</h1>
    </>
  );
}
```

In the above example, the `<Navigation />` component is being used within the `App` component. This allows the navigation component to be rendered alongside the "Ayush Shah" heading.

By following these steps, you can create and use components in your React application. Remember to separate your UI into smaller, reusable components for better code organization and maintainability.

## Props
In React, props (short for "properties") are a way to pass data and configuration settings to components. They allow us to create reusable components and make our website more dynamic by updating the component's data.

## Example Usage
Let's take an example to understand how props work. In this example, we have a `Person` component that displays information about a person.

```jsx
// Person.jsx
export function Person(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{props.profession}</h4>
            <h5>{props.age} Years old</h5>
            <p>Live in {props.city}</p>
        </div>
    )
}
```

In the above code, the `Person` component receives `props` as a parameter. We can then access the individual properties (`name`, `profession`, `age`, `city`) using `props.propertyName`.

Now, let's use the `Person` component in our `App` component:

```jsx
// App.jsx
import { Person } from './components/Person';

function App() {
    return (
        <>
            <h1>Welcome to My Website</h1>
            <Person name="Ayush Shah" profession="Web developer" age="20" city="Mumbai" />
            <Person name="John Doe" profession="Designer" age="25" city="New York" />
        </>
    );
}

export default App;
```

In this example, we have used the `Person` component twice with different values for each person. By passing different props to the `Person` component, we can dynamically update the displayed information for each person.

## Benefits of Props
Using props provides several benefits:
- **Code Reusability**: Instead of creating separate components for each person, we can reuse the `Person` component and pass different props to display information for different individuals.
- **Dynamic Updates**: Props allow us to make our website more dynamic by easily updating the data displayed in components based on the passed props.
- **Data Flow**: Props facilitate the flow of information from parent components to child components. Parent components can pass data to child components using props.

By utilizing props effectively, we can create flexible and reusable components in React, resulting in more maintainable and efficient code.