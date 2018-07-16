# Quickstart Webpack

A scaffold project for a [Webpack](https://webpack.js.org/) webapplication, without the overhead of specific libraries. It can be used to quickstart a prototype project for any kind of module-based webapplication. It has some preconfigured standards for development and production. 

## Technology Stack

The only predefined technology in the stack, that has a direct impact to the coding, is a [SASS](https://sass-lang.com/) preprocessor, for translating `.scss` stylesheets. It's already added because there is no good reason for not using it. Apart from that there are no preset frontend libraries in this project.

### Runtime dependencies

- no predefined runtime dependecies

### Buildtime dependencies

- Webpack + plugins
- Babel + presets
- SASS
- ESLint

## Requirements

### For development
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (included in Node.js)
- [git](https://git-scm.com/)
- browser

### For production
- webserver for static content (i.e. [Apache](https://httpd.apache.org/))
- browser

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
If you have static resources, wich shouldn't be loaded by Webpack, put it in here. When running a build, Webpack generates the resource bundle into this folder. The content of this folder is production ready and can deployed / copied to any kind of webserver (i.e. [Apache](https://httpd.apache.org/)). It will be a standard ECMAScript 5 webapplication. Node.js and npm are not needed in production.

The main entry point of your web application is the `index.js`, you can find in the `src` folder. Start your implementation here. Use the ECMAScript 6 module-system, by using [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export).
The `src` folder contains a little demo, to demonstrate how to handle modules and resoures with import / export. Just delete all `demo.*` files and empty the `index.js` to get rid of it.

All scripts and resources, that should be handled by Webpack, should be placed in the `src` folder (except for the libraries you installed via npm). In the default configuration of this project Webpack can import .js and .jsx files (add React), .css and .scss files, JPG's, PNG's, SVG's and various Webfont files.

## How to add React?

If you want to have a [React](https://reactjs.org/) application you just have to excecute ```npm install react react-dom``` to add the frontend libraries. Then run ```npm install --save-dev babel-preset-react``` to add the backend library for parsing JSX files.

Then just add the value `react` to the presets in your `.babelrc` file :

```javascript
{
    "presets": ["env", "react"]
}
```

Your now ready to use [React and JSX](https://reactjs.org/docs/hello-world.html)!

## How to add Angular?

To add [Angular](https://angular.io/) there is a littlebit more to do. You need the Angular libraries, of course, a Typescript-Loader, a little more configuration and some Plugins and Polyfills. The Angular documentation describes how to add Angular to a Webpack project: [Angular with Webpack](https://angular.io/guide/webpack)

## Something else?

If you publish a project, based on this scaffold, don't forget to:

- rename the project in the `package.json`
- change the description in the `package.json`
- change the author in the `package.json`
- adapt the license in the `package.json` if you need
- rewrite this `README.md` file
- maybe use `git rebase --interactive --root` to [squash the history](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) of this project into one commit, so your project's history isn't bloated with stuff related to this scaffold :)

# Reference

```bash
npm run start
```

- starts the application in a development server
- URL is shown on console
- refresh on every code change

```bash
npm run build
```

- creates the source bundle in the `dist` folder
- content in `dist` folder is production ready

```bash
npm run clean
```

- cleans up the workspace by deleting generated sources

```
npm run lint
```

- executes a static code analysis in `src`
- show's JavaScript problems and dirty code