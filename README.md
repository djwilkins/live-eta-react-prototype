# Purpose

The purpose of this project is to create a simple prototype of the fuller "Live ETA" React app I will create in the near future.

## Requirements

* Task component has basic UI worked out for Action state/view (Edit view will wait real project)
* Task component passed down tasks as prop

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

## Install Material-UI Core

* Install Material-UI Core
  * $ npm install @material-ui/core
* And add Material-UI google font dependency to index.html
* Source: [Material-UI Official Docs - Getting Started](https://material-ui.com/getting-started/installation/)
  * Note: Will probably install icons package later (when need arises)

## Simple "Hello World" Test

Complete basic react app setup for hello world test.

* Create index.js and app.js files
** index.js file takes care of rendering to dom node
** app.js is top level functional component
* Put root node div in index.html and link to index.js script
* Test by executing parcel build/serve script:
  * $ npm run dev

It's worth noting that when you use "Create-React-App" / react-scripts,
an explicit reference in the index.html to the index.js is not required.

Some discussion/explanation here: https://stackoverflow.com/questions/41738421/how-react-js-index-js-file-contacting-index-html-for-id-references

## Simple "Hello World" Test w/ Material-UI

Complete basic react app setup for hello world test utilizing Material-UI.

* Use Material-UI Typography component for "Hello World" text.
* Apply styles to center text horizontally (Typography componenet "align" prop)
* And include some top/bottom margin (utilzing Material UI makeStyles/useStyles pattern)
* Also fix app.js -> App.js component file to capitalized.

# Create "Live ETA" Prototype

Realized better to prototype App I'll be working on sooner.

Here, I'm hard coding "tasks" to use while developing UI elements.

Most logic and state management will wait for the actual app.

In this update, created a CenterBox component that utilizes two Material UI Box components to center everything.

Also, created a custom Material UI Badge component called Styled Badge to get the time holding Badge placement where desired.

Next, will continue to better organize things and further flesh out the UI.

# Create "Live ETA" Prototype - Further UI Work

Starting with moving Card component and children to a new Task component.

And then by planning out other componenets with JSX comments in App.js

And creating Tasks, AppTitle and AppControls components (leaving TaskTimer and EtaDisplay to go for overall layout plan).

# Create "Live ETA" Prototype - Adding Icons to AppControls

Quick update adding icons in the Button(s) of the AppControls componenent.

After first installing material ui buttons module - $ npm install @material-ui/icons

# Creating Shared Components - StyledCard and StyledTypography

In preperation for new "CurrentTask" and "EtaDisplay" components, created new shared component StyledTypography and extended StyledCard shared componenet with dynamic background color styling based on passed "style" prop (which can be a tasks status or other value.)

Basically, just modularizing out usage of Material UI Card and Typography components here where plan to use similar styling in Tasks, CurrentTask and EtaDisplay components.

# Created CurrentTask and Eta Display Components

Created Current Task and Eta Display Componenent.

Note: Currently using simple placeholders from hard coded time values.

(Ex. EtaDisplay has total minutes of tasks now... later will be dynamic time to finish = currentTime + tasksTimeLeft)

# Enhanced StyledBadge for Different Task Status

The StyledBadge like the StyledCard will now adjust color based on task status.