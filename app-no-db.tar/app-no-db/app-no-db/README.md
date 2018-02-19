# App

Simple app that reads from and writes to a Node.js server and uses:
- NodeJs
- AngularJs
- Express
It currently does not use a database but stores posts in memory

## Installation

1. Install node and npm
    - Reference Link [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)
        - `curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -`
        - `sudo apt-get install nodejs`
        - `sudo apt-get install build-essential`
2. `git clone https://github.intuit.com/SBG/AWS-Workshop-Material.git`
3. `cd AWS-Workshop-Material/app`
3. `npm install`
4. `node server.js`

## Configuration
1. The app runs on port `3000` by default. Set the enviornment variable `PORT` to run it on any other port
    
## UI 

Kind of simple for now - working on improving it

![UI](https://s3.amazonaws.com/uploads.hipchat.com/87219/1638735/uUoESe04N6uHOsn/Screen%20Shot%202016-12-22%20at%2011.44.48%20PM.png)

## Files

1. `server.js`: Sets up the http server to listen on a particular port
2. `package.json`: Defines the dependencies to be used by the project
3. `controllers/api/posts.js`: Backend code for the app. Right now it appends the post to a memory in variable
4. `controllers/index.js`: Defines which function to call when a specific URL pattern is hit
5. `controllers/static.js`: Serves static content like js and html files from the server
4. `layouts/app.html`: Front end for the app in angular JS
5. `assets/app.js`: Angular JS controller for the app