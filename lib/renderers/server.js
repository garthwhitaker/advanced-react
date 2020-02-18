import React from "react";
import ReactDOMServer from "react-dom/server";
import fetch from "node-fetch";

import App from "components/App";
import StateApi from "shared-api";
import config from "config";

const serverRender = async () => {
  const response = await fetch(`http://${config.HOST}:${config.PORT}/data`);
  const result = await response.json();
  const store = new StateApi(result);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData: result
  };
};

export default serverRender;
