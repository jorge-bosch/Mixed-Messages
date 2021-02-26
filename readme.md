# Mixed Messages
First Codecademy group project using GitHub as a repository. Script should populate a Mad Libs story that generates random words from existing arrays of data.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)


## General info
N/A

## Screenshots
N/A

## Technologies
* Javascript
* HTML
* CSS

## Setup
Describe how to install / setup your local environement / add link to demo version.

## Code Examples
Show examples of usage:

Logic used for randomizing arrays
function assignNoun() {
    let randNoun = [];
    for (i = 0; i < 3; i++) {
        randNoun.push(noun.splice(Math.random()*(noun.length-1), 1).pop())
    }
    return randNoun
}

## Features
List of features ready and TODOs for future development
* Generate randomized message upon execution of the javascript file.

To-do list:
* Complete Javascript file -- COMPLETE
* Complete HTML file
* Complete CSS file

## Status
Project is: _in progress_

V1.0 - Successfully implement javascript coding with front end interaction on webiste.
V2.0 - (future) - Potentially incorporate multiple madlib libraries to randomize the story, in addition to the nouns/adjectives/verbs/adverbs.

## Inspiration
Codecademy assignment

## Contact
N/A