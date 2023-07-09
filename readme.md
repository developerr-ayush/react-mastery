# React Mastery

## Prerequist

- Node
- vs code (or any other code editor)
- broswer (chrome/firefox/...)

### important things to note

- we are using vite for creating react app as it is faster way to create react app
- we will be using jsx over here so using vite already gives us files with jsx extention
- will also cover jsx syntex over here after a little bit further

### how to get started

- First download node latest version which has LTS means long term support as it is stable version
- after installing node must check this command `node -v` if it gives error then there is mistake
- _create_ your first react app by this command `npm create vite@latest`
- project name will be . if you dont want any other folder inside of it
- framework - react (yes using vite you can create various frameworks)
- varient will be _javascript_
- after this install all dependencies by `npm i`
- to start server use `npm run dev`
- our main files are inside `src` folder `app.jsx` and `main.jsx`

### Congrats your first react app is here you can see it on your browser

### lets delete files which will be not used

### in simple word lets create boiler plate

- inside `src folder` delete `index.css` and `app.css`
- inside `main.jsx` delete a line `import './index.css'`
- inside `app.jsx` delete every line`
- inside `app.jsx` paste the above code (we are just removing all unnecessary lines)

```
function App() {
  return "Hello world"
}

export default App
```

- this syntex will be explained further

### something more about jsx

- jsx means you can write HTML inside js.
- ofcourse we were havong template literal but its a complex thing to do.
- it is very easy to use jsx
- if you just want to create a h1 tag inside our file then it will be like as shown below in return of function you can use any tag

app.js

```
function App() {
  return <h1>Hello World</h1>
}

export default App
```

- lets suppose we want multiple line
- if you use like this it will gonna give error

```
function App() {
  return <h1>Hello World</h1> <p>Hello World</p>
}

export default App
```

## basic of jsx

- inside return there should be `()` circle braces as it is gonna gove long output
- if there is multiple element then it should be enclosed in a div or empty brackes like this `<>Something here</>`
- for attributes like `aria-expanded` or any attribute have hyphen in between you will have to use `ariaExpanded` means we have to use camel casing
- there are some reserve keywords in jsx like `class` and `for` so you cant use class or for attribute insted of that you will have to use `className` and `htmlFor` attribute
- to write js inside of the html which is written in return we will use curly braces `{}` like this `<div> <h1>{3+3*5}</h1> </div`
- that basically mean inside curly braces whatever we write it will be executed as javascript
- to write `inline style`
  - as we know we write `inline style` like this `<h1 style="background:red">Hello world</h1>` but its an invalid syntex
  - we are gonna use a js object syntex for writing `inline style`
  - first inside style tag we will write like this `style={}` it basically mean inside `{}` brackets js will come
  - then we will do `style={{}}`, so bascally inside that we are gonna create object
  - also if there is hyphen inside of css property like `border-top` we will use `borderTop`
  - final output will be `style={{ background: "red", borderTop: "3px solid black" }}`
- if there is empty tag line `<input type="number">` we will have to self close it like `<input type="number"/>` or we can also do like this `<input type="number"></input>`
- we can also store element/tags inside of variable like `let instaId = <span>developer_ayush</span>` _it will not be defined in return it should be outside of return_
- we can use it like `<h1>Ayush insta id is {instaId}</h1>` in return
