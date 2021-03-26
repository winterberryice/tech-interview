# ContentCal Frontend Challenge

## Our Stack

We are currently working with and what has been implmented in this tech test is ...

- [Angular 10+](https://angular.io/)
- [Typescript](https://www.typescriptlang.org/)
- [NX](https://nx.dev/) Workspace
- [NGXS](https://www.ngxs.io/) State Manager
- [Jest](https://jestjs.io/) for Unit Testing
- [Cypress](https://www.cypress.io/) for E2E testing
- [Storybook](https://storybook.js.org/) as a rapid development tool and component library
- SCSS - We currently support the latest 2 versions of Edge, Chrome, Firefox and Safari
- [Auth0](https://auth0.com/) for Authentication
- [FileStack](https://filestack.com) for files uploads and transformations
- [AWS Amplify](https://aws.amazon.com/amplify/hosting/) for hosting / stage enviroments generation
- [GitHub Actions](https://github.com/features/actions) for automation, CI/CD

## What we're looking for

- A stylish solution with unit test coverage
- Clean, concise code
- an appreciation of design

## Run the project

1. Run `npm install`
2. Run `npm start`
3. Enter `http://localhost:4200`

### Running unit tests

- Run `npm run affected:test` to execute the unit tests via Jest on affected files only.
- Run `npm run affected:test --all` to execute the unit tests via Jest on entire project.

### Running linters

- Run `npm run affected:lint` to execute linter on affected files only.
- Run `npm run affected:lint --all` to execute linter on entire project.

## Challange

The Front-end challenge is to improve an idea board where you can create, view, update and delete ideas.
There is a starter app built using NX or you can choose you use your own boilerplate.

![idea-board](https://user-images.githubusercontent.com/8656036/112143530-47478b80-8bd8-11eb-9747-1ce0814fc942.png)

### Challange 1: Protect your ideas

Oops, seems like you can access your idea list even if you are not logged in just by entering `http://localhost:4200/ideas`.

Your ideas should be accessed only by logged-in users. Could you please protect it somehow?

_Tip_: State will hold information about logged-in user  `isAuthenticated` selector in `libs/core/src/lib/_states/auth.state.ts` that you can use.

### Challange 2: optimise your idea

One of our clients has hundreds or thousands of great ideas, and they experienced that rendering long lists can impact the app performance. 

__Refator__ the `IdeasListingComponent` (`apps/idea-board/src/app/ideas/ideas-list/_components/ideas-listing`) to optimise this component performance.

### Challange 3: enhance your ideas

Designs are not ready yet, but we want to use some of your creative thinking to extend the ideas

1. Include a creation date on each idea
2. Add filtering and sorting to make is easier to locate your idea.
    - sort by date
    - sort by name
    - filter by tags
    - filter by idea
3. Write tests for the sorting and filtering functions

We stated on the utilities function to help out - some defined here `apps/idea-board/src/app/ideas/_utilities/ideas.utilities.ts`.

_Tip_: Run `npm run affected:test --watch`.

## Extra credits

If you feel like going the extra mile then here are some more challenges

### Challange a: darken your idea

The dark mode is a must-have of all fancy apps those days, let's add it to our app.

_Tip_: All the logic is already there and we use `scss` and `@ngxs/store`

Feel free to choose your own color scheme but if you do not have an idea for your own you can use those colors:

| Description                                               |  Color  |
| --------------------------------------------------------- | :-----: |
| App background                                            | #2f3337 |
| Component bg color (cards, login box, top navigation etc) | #3f4346 |
| Border color                                              | #828587 |
| Dark border color (eg idea card hover border color)       | #bbbbbb |
| Text color:                                               | #ffffff |
| Lighter text color (eg input placeholders):               | #bbbbbb |

### Challange b: delete an idea

Deletion was partly implemented and will need to be completed

_Tip_: we use `@ngxs/store`

