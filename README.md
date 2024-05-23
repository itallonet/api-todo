
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

# API: TO - DO

API in Fastify, Postgres and Docker. Responsible for task management (CRUD).

_This is a simple project, intended to demonstrate a basic CRUD, without business rules._

## How to run locally?

Clone this project

```bash
  git clone https://github.com/itallonet/api-todo
```

Enter the project directory

```bash
  cd api-todo
```

Run docker (to upload the database)

```bash
  docker compose up -d
```

Install dependencies

```bash
  npm install
```

Perform database configuration with Prisma

```bash
  npx prisma generate
```

_If you face any problem then run this_

```bash
    npx prisma migrate dev --name init
```

Start the server

```bash
  npm run dev
```

Now, use the URL http://localhost:9140 according to the documentation.


## API documentation

You can use the [insomnia-schema.json](https://github.com/itallonet/api-todo/blob/master/insomnia-schema.json) file to have the collection of requests in your hands at once.

#### Return All Tasks

```http
  GET /:size/:page
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `size` | `number` | **Required**. Number of records you want to return |
| `page` | `number` | **Required**. Page number |

#### Create a Task

```http
  POST /
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Name`      | `string` | **Required**. Task name |


#### Update a Task

```http
  PUT /
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `ID`      | `number` | **Required**. Task identification |
| `Name`      | `string` | **Required**. Task name |
| `Done`      | `boolean` | **Required**. Identifies whether the task was completed (True) or not (False) |

#### Deletes a task

```http
  DELETE /
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `ID`      | `number` | **Required**. Task identification |



## Author

- [@itallonet](https://www.github.com/itallonet)

