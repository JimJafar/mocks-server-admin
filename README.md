# Mocks Server Admin

A Dockerised application that includes mocks-server and an admin GUI to simplify management of your mock routes.

## Developing

```shell
npm run dev:api
npm run dev:client

# or if you don't care about the API logs and want to run both api & client in a single terminal window:
npm run dev
```

The API is available at [http://localhost:3001](http://localhost:3001)
The client is at [http://localhost:3000](http://localhost:3000)

You can also reach mocks-server at [http://localhost:3100/](http://localhost:3100/) and the mocks-server Swagger/OpenAPI documentation at [http://localhost:3110/](http://localhost:3110/)

## Running with Docker

```shell
docker-compose build --no-cache # you only need to run this if you change the Dockerfile
docker-compose up
```

The addresses are the same as above.
