# React Mastery

## Prerequisites

- Node.js
- VS Code (or any other code editor)
- Browser (Chrome/Firefox/...)

## Important Things to Note

- We are using Vite to create a React app as it is a faster way to set up a React project.
- We will be using JSX in this project, and Vite automatically provides files with the .jsx extension.
- We will cover JSX syntax in detail later.

## Getting Started

1. **Download and Install Node.js**

   Download and install the latest LTS (Long-Term Support) version of Node.js, as it is the stable version.

2. **Verify Node.js Installation**

   After installing Node.js, verify the installation by running the command `node -v` in your terminal or command prompt. If it gives an error, there might be a mistake in the installation.

3. **Create a New React App**

   Create your first React app using the following command in your terminal or command prompt: `npm create vite@latest`.

   - For the project name, you can use "." if you don't want to create an additional folder.
   - Choose the framework as React (Vite supports various frameworks).
   - Select the variant as JavaScript.

4. **Install Dependencies**

   After creating the app, navigate to the project directory using `cd your-project-folder` and install all dependencies using the command `npm i`.

5. **Start the Development Server**

   Start the development server using `npm run dev`. This will run your React app, and you can view it in your browser.

6. **Project Structure**

   The main files of the project are located inside the `src` folder: `app.jsx` and `main.jsx`.

   Now, your first React app is running, and you are ready to build awesome things!

## Setting up the Boilerplate

To set up the boilerplate, follow these steps:

1. **Remove Unnecessary Files**

   Inside the `src` folder, delete the `index.css` and `app.css` files.

2. **Clean Up `main.jsx`**

   In `main.jsx`, remove the line `import './index.css'`.

3. **Reset `app.jsx`**

   In `app.jsx`, delete all the existing lines.

4. **Replace `app.jsx` Content**

```jsx
function App() {
  return "Hello world";
}

export default App;
```

## Exploring JSX

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

4. Make sure to start the file name with a capital letter.

5. Define your component as a JavaScript function. Give the function a name that starts with a capital letter. For example, if you are creating a navigation component, you can name it `Navigation`. It is recommended that the function name and file name should be the same.

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

6. Finally, export the component function using the `export` keyword. This allows other files to import and use the component.

7. In the file where you want to use the component, import it using the appropriate path. If the component is stored in a separate folder, include the folder name as part of the import statement.

```jsx
import { Navigation } from "./components/Navigation";
```

8. Now, you can use the component as a JSX element in the desired location within your code.

```jsx
function App() {
  return (
    <>
      <Navigation />
      <h1>Ayush Shah</h1>
    </>
  );
}

export default App;
```

In the above example, the `<Navigation />` component is being used within the `App` component. This allows the navigation component to be rendered alongside the "Ayush Shah" heading.

By following these steps, you can create and use components in your React application. Remember to separate your UI into smaller, reusable components for better code organization and maintainability.

## Props

In React, props (short for "properties") are a way to pass data and configuration settings to components. They allow us to create reusable components and make our website more dynamic by updating the component's data.

### Example Usage

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
  );
}
```

In the above code, the `Person` component receives `props` as a parameter. We can then access the individual properties (`name`, `profession`, `age`, `city`) using `props.propertyName`.

### Using the `Person` Component

Now, let's use the `Person` component in our `App` component:

```jsx
// App.jsx
import { Person } from "./components/Person";

function App() {
  return (
    <>
      <h1>Welcome to My Website</h1>
      <Person
        name="Ayush Shah"
        profession="Web developer"
        age="20"
        city="Mumbai"
      />
      <Person name="John Doe" profession="Designer" age="25" city="New York" />
    </>
  );
}

export default App;
```

In this example, we have used the `Person` component twice with different values for each person. By passing different props to the `Person` component, we can dynamically update the displayed information for each person.

### Benefits of Props

Using props provides several benefits:

- **Code Reusability**: Instead of creating separate components for each person, we can reuse the `Person` component and pass different props to display information for different individuals.
- **Dynamic Updates**: Props allow us to make our website more dynamic by easily updating the data displayed in components based on the passed props.
- **Data Flow**: Props facilitate the flow of information from parent components to child components. Parent components can pass data to child components using props.

### Destructuring Props

In addition to accessing individual properties using `props.propertyName`, you can also destructure the `props` object to directly access the individual properties. This can make the code cleaner and more concise. Here's how you can use destructuring with props:

```jsx
// Person.jsx
export function Person({ name, profession, age, city }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{profession}</h4>
      <h5>{age} Years old</h5>
      <p>Live in {city}</p>
    </div>
  );
}
```

By using destructuring, you directly access the properties (`name`, `profession`, `age`, `city`) without the need to prefix them with `props.`. This can be especially helpful when you have multiple props being passed to the component.

### How to Add Files in React

- To import files in React, use the `import` statement. For example: `import './assets/css/style.css'` to import a CSS file.

- For images, use the `import` statement with a specific file path. For example: `import react from './assets/images/react.png'`. Then use the imported image in JSX with an `img` tag.

- For JSON data, use the `import` statement to import the JSON file. For example: `import data from './test.json'`. Then use the data as needed in your code.

### Events in React

- Events in React are similar to events in vanilla JavaScript but with some syntactic differences.

- To handle events in React, use the `onClick`, `onChange`, or other event handlers provided by React.

- Use the event handlers to call the appropriate functions when events are triggered. For example:

```jsx
function handleClick() {
  console.log("Button clicked!");
}

function App() {
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}
```

- Be careful not to execute the function immediately when defining the event handler. Use arrow functions or wrap the function in another function to avoid this.

### State

- In React, state refers to the internal data of a component that can be changed over time.

- To work with state in a function component, use the `useState` hook provided by React. This hook allows you to declare a state variable and its setter function.

- Initialize the state using `useState` in the function component. For example:

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

- When you update the state using the setter function, React will automatically re-render the component with the updated state.

- You can use multiple `useState` hooks in a function component to manage different state variables.

### Using Multiple `useState` Hooks

- When using multiple `useState` hooks in a function component, each hook maintains its own state and update mechanism.

- If you want to update multiple states based on previous states, use the functional update form of the setter function. This ensures that you are working with the most up-to-date state value.

- Here's an example of using the functional update form to update multiple states:

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <input type="text" value={message} onChange={handleChange} />
      <p>
        Message:
        {message}
      </p>
    </>
  );
}
```

- In the example above, the `handleIncrement` function uses the functional update form of `setCount` to increment the count based on the previous state. Similarly, the `handleChange` function updates the `message` state based on the input value.

### Controlled vs Uncontrolled Components

In the context of React, controlled and uncontrolled components refer to different ways of managing and handling form inputs and their state.

1. Controlled Components:
   Controlled components are React components where the value of the form element (e.g., input, textarea, select) is controlled by React state. This means that the component's state is the single source of truth for the input's value, and any changes to the input value are handled by updating the state. To update the input value, you need to use the `onChange` event and update the state with the new value.

Example of a controlled input component:

```jsx
import React, { useState } from "react";

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleChange} />;
};
```

In this example, the `inputValue` state controls the value of the input, and any changes to the input are reflected in the state, and vice versa.

Advantages of controlled components:

- You have full control over the input's value and can easily manipulate and validate it.
- The input state can be easily shared or managed across different components.

2. Uncontrolled Components:
   Uncontrolled components, on the other hand, allow form inputs to manage their own state internally, without being controlled by React state. In this approach, the component relies on DOM refs to get the input's value when needed, rather than handling every change through React events.

Example of an uncontrolled input component:

```jsx
import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Accessing the input value using the ref
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </>
  );
};
```

In this example, the input manages its own state, and we access its value using the `inputRef` when needed.

Advantages of uncontrolled components:

- Less code is required compared to controlled components, as you don't need to handle every change explicitly.
- It can be useful for simple forms and in cases where you don't need to track the input's value in real-time.

In general, it is recommended to use controlled components for most scenarios as they provide more control and make it easier to manage the form state, especially for complex forms or when you need to perform validation and handle form submission. Uncontrolled components might be more suitable for simple use cases where you don't need to perform real-time validation or when dealing with large, dynamic forms.

### `useEffect` Hook

The `useEffect` hook in React allows you to perform side effects in functional components. Side effects can include things like data fetching, subscriptions, or manually changing the DOM. It is similar to the lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) in class components.

Syntax:

```jsx
useEffect(() => {
  // Side effect code here
  // This function will run after the component renders
  // It can be used to perform tasks on component mount, update, or unmount

  return () => {
    // Cleanup code here
    // This function will run before the component unmounts
    // It can be used to clean up resources like subscriptions, timers, etc.
  };
}, [dependencyArray]);
```

The `useEffect` hook takes two arguments:

1. A function that represents the side effect you want to perform.
2. An optional dependency array (`[dependencyArray]`) that contains values from the component's state or props. When one or more of these dependencies change, the effect will run again.

### Example Usage of `useEffect`

```jsx
import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [item, setItem] = useState("Example Item");
  const [price, setPrice] = useState(100);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // This function will run after the component renders for the first time and whenever 'item' or 'price' changes.
    console.log(item);
    document.title = item;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // The cleanup function: This will run before the component unmounts or when 'item' or 'price' changes next time.
    return () => {
      console.log('Component is unmounting or "item" or "price" is changing.');
      window.removeEventListener("resize", handleResize);
    };
  }, [item, price]); // Only re-run the effect if 'item' or 'price' changes

  return (
    <>
      <h1>{item}</h1>
      <p>Price: {price}</p>
      <p>Window Width: {width}</p>
    </>
  );
}
```

In the above example, the `useEffect` hook is used to set the document title based on the value of `item`, and it also adds a window resize event listener to update the `width` state whenever the window is resized.

The dependency array `[item, price]` ensures that the effect runs whenever the values of `item` or `price` change. If you pass an empty dependency array (`[]`) as the second argument to `useEffect`, the effect will only run once after the initial render (equivalent to `componentDidMount`).

Remember that if you have a cleanup function in `useEffect`, it will be executed before the component unmounts or before the effect runs again due to changes in the dependencies.

### Common Use Cases of `useEffect`

1. **Data Fetching**: You can use `useEffect` to fetch data from an API when the component mounts and update the state accordingly.

2. **Subscriptions**: `useEffect` is useful for setting up and tearing down subscriptions, such as WebSocket connections.

3. **DOM Manipulation**: If you need to perform manual DOM manipulations or interact with third-party libraries that require access to the DOM, you can use `useEffect`.

4. **Timers and Intervals**: `useEffect` can be used to set up and clean up timers and intervals.

### When to Use `useEffect`

- Use `useEffect` when you need to perform side effects in functional components, such as fetching data, manipulating the DOM, or subscribing to events.

- Avoid using `useEffect` for tasks that don't require cleanup or are not dependent on component state or props, as it may lead to unnecessary re-renders.

- If you have multiple side effects in a component, you can use multiple `useEffect` hooks to separate concerns and manage dependencies for each effect.

### Cleanup in `useEffect`

- If your `useEffect` performs any setup that needs to be cleaned up when the component unmounts or before the effect runs again, you can return a cleanup function from the effect.

- The cleanup function is executed before the component unmounts or before the effect runs again if any of the dependencies change.

- This is useful for unsubscribing from subscriptions, clearing timers, or removing event listeners to prevent memory leaks and unnecessary side effects.

With the `useEffect` hook, you can handle side effects in your functional components with more control and flexibility. Just remember to manage dependencies properly to avoid unintended behavior and optimize performance.

### Conclusion

React is a powerful and popular JavaScript library for building user interfaces. By following the steps provided in the "Getting Started" section, you can set up your development environment and create your first React app.

Understanding JSX and components is essential in React development. JSX allows you to write HTML-like syntax in your JavaScript code, making it easier to create UI elements. Components, whether function components or class components, are the building blocks of a React app. They enable you to create reusable and modular pieces of UI and logic.

Props are a fundamental concept in React that allows you to pass data and configuration settings to components. By using props, you can create dynamic and reusable components that display different information based on the data passed to them.

State management is another important aspect of React. The `useState` hook provides an easy way to manage and update state in function components. By understanding controlled and uncontrolled components, you can choose the most appropriate approach for handling form inputs and their state.

With these concepts and knowledge, you are now equipped to start building more complex and interactive React applications. Happy coding!
