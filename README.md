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

Before starting my first week at Flatiron School, I told myself to prepare for the upcoming journey. The next 15 weeks would be mentally taxing and I would be going through a type of stress that I hadn't experienced before.

Because of that, I wanted to just stay in my lane, keep my head down, and continue learning and growing. I didn't really want to talk to people or make friends, I was just here to become the best software engineering student in my cohort.

There's a tradition at Flatiron School where at the end of every week, everyone in the cohort would gather together for an event called Friday Feels. 

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
