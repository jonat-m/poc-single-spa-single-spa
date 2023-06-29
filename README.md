# Poc Microfrontend - Single Spa

This project is a proof of concept (POC) of microfrontends using the Single SPA library. It consists of several microfrontends in React, including the following projects that also include TypeScript and basic Jest.

More information about single-spa at: https://single-spa.js.org, Used version 5.x

## Part: Single Spa

This repository contains `single-spa` the part responsible for the mechanism that connects all microfrontends.

## Pre Requirements

Make sure you have the following tools installed, made in versions:

- Node.js (version v19.8.1)
- npm (version 9.5.1)
- yarn (version 1.22.19)

## Project Structure

Parts of this project are the repositories:
- `poc-single-spa-single-spa`: Single-SPA is the engine that connects all the microfrontends.
- `poc-single-spa-react-single`: react-single is an initial test run.
- `poc-single-spa-react-multiple`: react-multiple also includes routes for navigation.
- `poc-single-spa-react-app1`: react-app1 together with react-parcel and utils, combines different microfrontends that run concurrently.
- `poc-single-spa-react-parcel`: react-parcel, together with react-app1 and utils combines different microfrontends that run concurrently.
- `poc-single-spa-utils`: utils is a package that contains helper functions for other microfrontends.
- `poc-single-spa-react-header`: react-header is a header component visible in all the microfrontends.

## Installation

1. Clone the repositories you want on your local machine with `poc-single-spa-single-spa` as mandatory

```node
git clone https://github.com/jonat-m/poc-single-spa-single-spa.git
git clone https://github.com/jonat-m/poc-single-spa-react-single.git
...
```

2. Navigate to each repository's directory:

```node
cd poc-single-spa-single-spa
```

3. Install the necessary dependencies:

```node
npm install
```

## Executing the project

1. Access the orchestrator `single-spa` poc-single-spa-single-spa
```node
cd poc-single-spa-single-spa
```

2. Start the development server:

```node
npm start
```

3. It will serve port 9000, to verify you can open the browser at the address [http://localhost:9000](http://localhost:9000).

4. For each microfrontend you want to run, go to the folder. Ex:

```node
cd poc-single-spa-react-single
```

5. Check that the port is the same as configured in the `single-spa/src/index.ejs` file, in this example port `8500`.

```node
"@org/react-single": "//localhost:8500/org-react-single.js"    
```


6. Start the microfrontend:

```node
npm start --port 8500
```

7. Access by browser [http://localhost:9000/react-single](http://localhost:9000/react-single).


## Technologies Used

- Webpack, Babel, Eslint, Jest, Prettier, default do single-spa
- React
- React Router Dom
- Typescript

## Contribution

If you want to contribute to this project, please follow the steps below:

1. Fork this repository.
2. Create a branch for your new feature (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT license.

## Contact

- Jonathan Mauricenz - jonathan.mauricenz@gmail.com
- Project on GitHub: [https://github.com/jonat-m/poc-single-spa-single-spa](https://github.com/jonat-m/poc-single-spa-single-spa)
