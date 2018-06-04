# Quickstart Webpack

A scaffold project for a [Webpack](https://webpack.js.org/) webapplication, without the overhead of specific libraries. It can be used to quickstart a prototype project for any kind of module-based webapplication. It has some preconfigured standards for development and production. The only predefined technology in the stack is a [SASS](https://sass-lang.com/) preprocessor, for creating and importing `.scss` stylesheets.

## Installation

First ```git clone``` this project.

Second, step into the new folder and remove the git remote:

```bash
git remote remove origin
```

After that install all the default dependecies:

```bash
npm install
```

Now the project is ready to use. You can start the dev server with ```npm run start``` or create a deployable release version of it with ```npm run build```.

## Where to start?

The `index.html` can be found in the `dist` folder. It's preconfigured to load the via Webpack generated module bundle.

The main entry point of your web application ist the `index.js`, you can find in the `src` folder. Start your implementation here :)

## How to add React?

If you want to have a [React](https://reactjs.org/) application you just have to excecute ```npm install react react-dom``` to add the frontend libraries and ```npm install --save-dev babel-preset-react``` to add the backend library to parse JSX files.

Then just add to the presets in your `.babelrc` file the value '`react`':

```javascript
{
    "presets": ["env", "react"]
}
```

Your now ready to use React and JSX!