export default
`{
  "stage": 0,
  "plugins": [
    "react-transform"
  ],
  "extra": {
    "react-transform": [
      {
        "target": "react-transform-webpack-hmr",
        "imports": ["react"],
        "locals": ["module"]
      },
      {
        "target": "react-transform-catch-errors",
        "imports": ["react", "delicate-error-reporter"]
      }
    ]
  }
}
`;
