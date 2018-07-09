#Car Shop exercise:

#### The purpose of this exercise is for the developer to exhibit their familiarity with frontend technologies, programming patterns and to provide a sample of what clean and reusable code means to them.

## Set up:

1. Create a *folder/directory* `mkdir` if you are using `bash` or `zsh`. I have called mine *"cool-car-search"* but you can call yours anything.

2. Now inside that *directory* create a new *HTML, CSS and JS* file (eg: `index.html`, `style.css` and `script.js`) the reason we do not mix them together in a single **HTML** file is to provide **clean** and **reusable code** for anyone that will have to pick up some work on this project on a later date. That should be fairly easy. Also make sure you have your *scripts* and *style sheets* all set up for this project.

3. On this step clone **just** the db.json from [here](https://github.com/robheritage/carshop-dev-test) on github. and make sure it is in the same directory as your HTML, CSS and JS files. Now this is going to act as our data store.

4. For the next step you will need to have `npm` installed for instructions checkout the npm official website [here](https://www.npmjs.com/). 

5. Run `npm init` in your terminal, make sure you are in the newly created directory. this should create a *package.json* file that you can view in your project directory.

6. Next up, from your local terminal install the json server with this command `npm install --save json-server` once it is installed you shold be able to find it in your *dependencies* inside *package.json*

7. Head to *package.json* and replace on the *7th row* your **"test"** with **"json:server"** for usability purposes also replace **"echo \"Error: no test specified\" && exit 1"** with **"json-server --watch db.json"** . 

*Note: if you would like to use a remote schema for your app go ahead and set it up as follows: `"json:server:remote": "json-server https://raw.githubusercontent.com/robheritage/carshop-dev-test/master/db.json"` using the "RAW" format from github*

8. Test your server by runing `npm run json:server` that you have set up on step 7. Then head to your local browser I'm using **Google Chrome** but should be compatible for most browsers out there and go to `localhost:3000` and click on **Vehicles** under **Resources** that should confirm that you have successfuly set up your server and also linked your database that has been provided. **Congrats!**