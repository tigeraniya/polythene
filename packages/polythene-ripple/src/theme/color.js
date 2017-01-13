
const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    color: componentVars["color_" + tint] || componentVars["color"] || "inherit"
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme ", selector, componentVars, "dark" ) // inside dark theme
];
