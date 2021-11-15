# Trivia Game

[![Trivia - Create release](https://github.com/avalla/trivia-game/actions/workflows/release.yml/badge.svg?branch=v1.0.0)](https://github.com/avalla/trivia-game/actions/workflows/release.yml)

[![Trivia - Test and build](https://github.com/avalla/trivia-game/actions/workflows/build.yml/badge.svg)](https://github.com/avalla/trivia-game/actions/workflows/build.yml)

Just a coding challenge :)

## Prerequisites

- NodeJs >= 14.x
- Yarn

## Project structure

This project is a monorepo, using yarn workspaces.

    .
    ├── .github                          # Github Actions
    ├── docs
    ├── packages                         # Packages (applications, modules, etc)
    │    ├── module-logger               # Logger
    │    ├── module-models               # Models
    │    ├── web-backend                 # Backend application
    │    └── web-frontend                # Frontend application
    ├── CHANGELOG.md
    ├── index.js                         # Fake entry point, displays only a message
    ├── TODO.md                          # This guide
    └── README.md                        # Todo list


## Software architecture

See the picture

```
                         ┌ API ──────────┐          ┌ RDMBS ────┐ 
                         │               │          │           │     
 ┌ User ────┐            │               ├──────────┤           │ 
 │ Laptop   ├────────────┤               │          │           │     
 │          ├──────┐     └───────────────┘          └───────────┘     
 └──────────┘      │     ┌ Trivia ───────┐                                               
                   │     │               │                                               
                   └─────┤               │                                               
                         │               │                                               
                         └───────────────┘                                              

```


## Setting up dev

Execute from root project:

```shell
$ yarn set version berry
$ yarn plugin import interactive-tools
$ yarn plugin import workspace-tools
$ yarn install
```

## Start development environment

Execute from root project:

```shell
$ yarn start
```

## Execute commands in packages

To execute scripts you should launch:

```shell
$ yarn workspace <my-package> <command>
```

For example to add a library inside a package you should execute:

```shell
$ yarn workspace <my-package> add <awesome-library>
```

To interact with backend and frontend applications you can also use the shortcut saved inside scripts section in root project.

```shell
$ yarn <backend|frontend> <command>
```
