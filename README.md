# Software Engineering 083021 Love Letter

## Table of Contents

* [Live Link](#live-link)
* [Description](#description)
* [Technologies](#technologies)
* [Setup](#setup)
* [Design](#design)

<a name="live-link"/>

## Live Link

http://se083021-love-letter.herokuapp.com/

<a name="description"/>

## Description

<a name="technologies"/>

## Technologies/Requirements

- Ruby 2.7.4
- React
- NodeJS (v16) and npm
- Heroku CLI
- PostgreSQL

<a name="setup"/>

## Setup

First **fork** the project repository, then clone the project onto your local machine:
```
$ git clone git@github.com:**YOUR USERNAME**/083021-Love-Letter.git
$ cd 083021-Love-Letter
$ bundle install
$ npm install --prefix client
$ sudo service postgresql start
$ rails s
<!-- Inside of a new terminal -->
$ npm start --prefix client
```

<a name="design"/>

## Design

### Data Relationships

![image](https://i.imgur.com/CrY3OBc.png)

### Component Hierarchy

![image](https://i.imgur.com/VSKWDYt.png)
