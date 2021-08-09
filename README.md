# Tetris game

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- To play well known game - Tetris [v]
- See his present and previous score [v]
- See next block incoming [v]
- **BONUS** -- see his current level(that tells how fast game is going on) [v]

### Links

- Solution URL: [Add solution URL here](https://github.com/Haxikowy/tetris)
- Live Site URL: [Add live site URL here](https://haxikowy.github.io/tetris)

## My process

Firstly I wanted to build it on divs, but when I got further I've seen that when You want to change game state You have to loop through every div, and add, and remove class. So I decided to change my way to doing it in canvas. Basically whenever new block is generated it rolls it's shape and rotation, then render it on game screen(doesn't save it to gameGrid). Then, if there is collision on y axis it stops, saves to gameGrid, and generates new block with it shape and rotation. I wanted to build it OOP but I really need to learn more about programming paradigms.

### Built with

- OOP and ES6+ JS,
- Canvas API

### What I learned

I learned about ES6+, about bitmasks(also bytes and bits) and also finnally about converting from decimal to hexadecimal and binary. A lot about game logic and about that there is a big classic tetris community, there are even classic tetris events where you play it(smth like e-sport league). Scoring system in tetris(NES, Nintendo) is sick, I enjoyed creating it and searching information about it(again there is even tetris wikipedia where You can check everything!). This project was really fun to do!

### Continued development

There is some bugs(big one is collision one). I really need to improve graphics and effects, but to do that I need to learn more about canvas API. More about it in todo.md file.

### Useful resources

github.com -> a lot of games are made in here so I looked at someone code to improve mine.
youtube.com -> i've got collisions, some basic game logic explained here.
developer.mozilla.org -> MDN is always useful, syntax etc.

## Author

- Website - [Szymon Dolnik](https://github.com/Haxikowy/)
- Frontend Mentor - [@Haxikowy](https://www.frontendmentor.io/profile/Haxikowy)
