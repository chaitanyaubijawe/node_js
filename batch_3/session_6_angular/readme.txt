Prerequisite
  - Node
  - Npm
  - @angular-cli
    - installation
      - npm install -g <package_name>
      - npm install -g @angular/cli
      - npm install -g @angular/cli@8 -- for specific version
        - g -> global. It will install angular cli globally
      - ng new e-cart
        - it will create e-cart folder. download all dependency
      - ng serve
        - it will build and run your angular code
      - ng build
        - it will build your project and put it into dist/e-cart
      - ng generate component dashboard
      - npm install jquery@1.9.1 --save
      - npm install bootstrap --save
      - ng generate guard auth/auth
        - this will generate guards.
        - it is helpful to restrict access to a particular user.
      - ng g pipe pipe/trimText
        - used to format text
        - some default pipes are date, currency, lowercase,uppercase
      - ng g directive directives/clickEventListener
      - ng g service services/app
        - create service.
      - HttpClient and HttpClientModule
        - inject in constructor .... HttpClient in service
        - inject HttpClientModule in imports section of app.module.ts ()
      - ng serve --proxyConfig=proxy.conf.json
        - create a file
            - proxy.conf.json under root directory.....
            - add configuration mention over https://angular.io/guide/build
            - run application using
                - ng serve --proxyConfig=proxy.conf.json
        - configure proxy for your angular project.....
      - ng build --prod
        - it will not keep map files.
        - map files are used to debug JS --> TS in browser.
        - it will do webpack with cache bursting.....
      - ng build --watch
      - npm run start
        - key name 'start' is present in package.json script section....

Server side scripting....
Building a web server using express library...
    - npm install express --save
    - create server.js
    - open server.js -- https://www.npmjs.com/package/express
        - write code of creating web server using express...
        - open above url check code over there and paste it in server.js....


https://www.mocky.io/
    - To create mock REST API.
