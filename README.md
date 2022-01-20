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

**TL;DR:** Friends are cool, who knew?
           A sentimental website that holds information about the people I went through Flatiron School with.

________________________________________________________________________

Before starting my first week at Flatiron School, I told myself to prepare for the upcoming journey. The next 15 weeks would be mentally taxing and I would be going through a type of stress that I hadn't experienced before.

Because of that, I wanted to just stay in my lane, keep my head down, and continue learning and growing. I didn't really want to talk to people or make friends, I was just here to become the best software engineering student in my cohort.

There's a tradition at Flatiron School where at the end of every week, everyone in the cohort would gather together for a meeting called Friday Feels. Anyone who wanted to would share their feelings about how they felt the week went. Sometimes people would talk about how excited they were that they finally understood a programming concept and other times people would mention how they felt as if they were falling behind the curve.

I first thought Friday Feels were useless and a waste of my time. Why would I spend time listening to a bunch of people talk about their feelings when I could rather focus on doing work instead? But the more and more I listened, the more humanizing everyone became and I really started to look forward to these Friday Feels. Soon, I started cracking jokes and making friends and really started to enjoy our cohort's banter and environment.

I wouldn't have made it through this program without the people in our cohort. Everyone was kind and patient, supported each other when we were feeling down, and really brought out the best in me. So to everyone in our cohort, a love letter. ❤

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
