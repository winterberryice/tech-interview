# CcalApps

The Front-end challenge is to make an idea board where you can create, view, update and delete ideas.

There is a starter app built using NX or you can choose you use your own boilerplate.

We are currently working with...
 * Typescript throughout the codebase
 * Nx build
 * Angular 10+
 * SCSS
 * Jest + cypress testing
 * Storybook as a rapid development tool and component library
 * We currently support the latest 2 versions of Edge, Chrome, Firefox and Safari

## What we're looking for

 * A stylish solution with unit test coverage
 * Clean, concise code
 * an appreciation of design
 * A detailed README
 * A live site we can see (if possible)
 * Add you code to your favorite VCS and ping us your solution :)


## Using our NX starter

This project was generated using [Nx](https://nx.dev).

## NX Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@ccal-apps/mylib`.

## Development server

Run `ng serve idea-board` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=idea-board` to generate a new component.

## Build

Run `ng build idea-board` to build the project.
Run `ng build ui` to build the UI libragy project.

 The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test idea-board` to execute the unit tests via [Jest](https://jestjs.io).
Run `ng test ui` to execute the unit tests via [Jest](https://jestjs.io).
Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e idea-board-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Running ui storybook

npx ng run ui:storybook