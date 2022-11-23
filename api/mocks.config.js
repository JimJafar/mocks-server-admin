module.exports = {
  plugins : {
    inquirerCli: {
      enabled: false
    }
  },
  mock: {
    routes: {
      delay: 500,
    },
    collections: {
      selected: "foo", // Set collection "foo" as initially selected
    },
  },
};