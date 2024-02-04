<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://venturebeat.com/wp-content/uploads/2019/06/4f44eef2-5673-43e5-808c-0e215a3855c9.png?fit=1800%2C1120&strip=all" width="200" alt="Nest Logo" /></a>
</p>

## Description

Using GraphQL with Nest

Nest offers two ways of building GraphQL applications, the `code first` and the `schema first` methods. In the schema first approach, the source of truth is GraphQL SDL (Schema Definition Language) files.

In this repository I am using `code first`, though, which means that I use TypeScript decorators to generate the SDL from TypeScript class definitions. The @nestjs/graphql package reads the metadata defined through the decorators and automatically generates the schema for you. The @Field() decorator in the schema definition classes provides metadata about each field's GraphQL type.

## Installation

```bash
# Start a project:
$ nest new <project name>

# For Express and Apollo (default)
$ npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

When the app is running, if you go to `http://localhost:3000/graphql`you find your Apollo console to test your queries and mutations.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

Template by [vanesascode](https://vanesascode.com/)
