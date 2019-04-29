How to run

- ```$ npm i```
- ```$ touch .env && printf 'SECRET=YOURSECRET\nSALT_ROUNDS=10' > .env```
- start your mysql server and work bench
- set config.json development environment
- run the following code in workbench

```
DROP DATABASE IF EXISTS storytimedb;
CREATE DATABASE storytimedb;
USE storytimedb;
```

- ```$ npm start```