# Using Middleware
### Steps
1. To initialize the directory with the `package.json` file: `npm init`
2. To install the `Express` module, only for the project and not globally: `npm install express --save`
3. To install the `Morgan` module, only for the project and not globally: `npm install morgan --save`
4. To run the app: `node app.js`
5. Open the following URL in a browser to view the output: `localhost:3000` and `localhost:3000/secret` and study the log updates which gets printed on the terminal every time you request a page (refresh or traverse to other page)

- When you will request `localhost:3000`, a log similar to this will be printed on the terminal:

    `GET /secret 404 3.933 ms - 145`

  because the Home route `(/)` has not been intercepted by the app.

- The first time you will request the `localhost:3000/secret` page, a log similar to this will be printed on the terminal:

    `GET /secret 200 2.926 ms - 12`

  as the Secret route `(/secret)` can be handled by the app.

- The next time you will request the `localhost:3000/secret` page, a log similar to this will be printed on the terminal:

    `GET /secret 304 1.670 ms - -`

    as the Secret route `(/secret)` can be handled by the app. Although, the change in response code from `200` to `304` is due to the fact that the client has performed a conditional GET request and access is allowed, but the document has not been modified. Hence, the sever SHOULD respond with this status code.

For more details on middleware packages maintained by the Express team: http://expressjs.com/en/resources/middleware.html
