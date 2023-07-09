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

To fix this, enclose the elements within parentheses `()` or use empty brackets `<>` like this:

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
- If there are multiple adjacent elements, they should be enclosed within a parent element, such as a `div`, or by using empty brackets `<>`.
- JSX attribute names follow camel case instead of using hyphens. For example, use `ariaExpanded` instead of `aria-expanded`.
- Some reserved keywords in JSX, like `class` and `for`, cannot be used as attribute names. Instead, use `className` for `class` and `htmlFor` for `for`.
- To write JavaScript expressions inside JSX, use curly braces `{}`. For example: `<div> <h1>{3 + 3 * 5}</h1> </div>`.
- To apply inline styles, use the `style` attribute with a JavaScript object syntax. For example: `style={{ background: "red", borderTop: "3px solid black" }}`.
- Self-closing tags should be written with a trailing slash, such as `<input type="number" />`. Alternatively, you can also write them as `<input type="number"></input>`.
- You can store JSX elements in variables, like `let instaId = <span>developer_ayush</span>`. Remember to define variables outside the `return` statement.
- You can then use the variable inside JSX, such as `<h1>Ayush's Instagram ID is {instaId}</h1>`.