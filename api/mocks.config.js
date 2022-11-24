module.exports = {
  server: {
    port: 3100,
  },
  plugins : {
    inquirerCli: {
      enabled: false
    },
    adminApi: {
      port: 3110,
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