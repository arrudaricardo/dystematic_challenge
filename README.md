## Dystematic / Code challenge

### Applicant:

Ricardo de Arruda

settiricardo@gmail.com

[website](http://dearruda.me)

### Application Arquitecture

Server: Nodejs runtime, Typescript, graphQL (Apollo), express (serving static frontend files and graphQL end-point server)
Client (Front-end): Typescript, React, Material-ui, graphQL (Apollo)

### Building Process (Production)

```bash
# building frontend - path: ./client
cd client
npm i
npm run clean
npm run build

# building backend - path: /
cd ../
npm i
npm run clean
npm run build
npm start
```

Access:
[http://localhost:4000/](http://localhost:4000/)

### Development

Frontend dev server (path: **client/**)
```bash
cd client
npm i
npm start
```

Backend dev server (path: **/**)
```bash
npm i
npm run dev
```

Access:
[http://localhost:4000/](http://localhost:4000/)