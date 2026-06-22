import ReactGA from "react-ga4";

const initGA = () => {
  ReactGA.initialize("G-YQ3K0959XM");

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};

export default initGA;