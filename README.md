# NodeJS with Docker

### Start and running in background
```
docker run -d --expose 3000 -P -v "$PWD":/usr/src/app -w /usr/src/app node:4.6.0-slim npm start
```


### Start with interactive shell
```
docker run -it --rm --name web_node_server -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app node:4.6.0-slim npm start
```