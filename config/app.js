const mode = "development"; // test, production, development
const isDev = mode !== "production";
const webURL = isDev ? "localhost:3000" : "";
module.exports = {
  mode,
  isDev,
  webURL,
};
