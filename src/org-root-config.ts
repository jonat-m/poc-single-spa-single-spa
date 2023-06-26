import { registerApplication, start, LifeCycles } from "single-spa";

const applications = [
  {
    name: "@single-spa/welcome",
    package: "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
    activeWhen: "/",
    exact: true,
  },
  {
    name: "@org/react-single",
    package: "@org/react-single",
    activeWhen: "/react-single",
    exact: false,
  },
  {
    name: "@org/react-multiple",
    package: "@org/react-multiple",
    activeWhen: "/react-multiple",
    exact: false,
  },
  {
    name: "@org/react-app1",
    package: "@org/react-app1",
    activeWhen: "/react-app1",
    exact: false,
  },
  {
    name: "@org/react-header",
    package: "@org/react-header",
    activeWhen: "/",
    exact: false,
  },
];

applications.forEach((app) => {
  registerApplication({
    name: app.name,
    app: () => System.import<LifeCycles>(app.package),
    activeWhen: app.exact
      ? (location) => location.pathname === app.activeWhen
      : [app.activeWhen],
  });
});

start({
  urlRerouteOnly: true,
});
