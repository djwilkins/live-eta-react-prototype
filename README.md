# Purpose

The purpose of this project is to create a simple prototype of the fuller "smart saver" React app I will create in the near future.

## Requirements

* Input - Users DOB, Cost of Living (post income tax), Target Retirement Age, Assumed Inflation Rate
* Output - Users cost of living (post income tax) inflated to target age of retirement.
* React App - useState and useEffect hooks used
* Material UI - componants utilized for UI input/output
* Separate Module for Logic - Revealing module pattern

# Commits

## Git Init Commit

* $ git init
* README.md created
* Pushed to github

## Node Init Commit

* $ npm init -y
* Added .gitignore

## Install Parcel, React and Index.html

* Install Parcel for build/server (Webpack alternative)
  * $ npm install -D parcel-bundler
  * Add parcel "dev" build/serve command to package.json
* Install React web basics
  * $ npm I react react-dom
* Add /src/index.html (! -> emmet html boilerplate)