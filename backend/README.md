# Course Project API
This is the second part of the course project which will contain a RESTful JSON API for a contact us from and user registration.

**Note** Please follow the requiremnts before running any commands to make sure all dependencies have been installed and that the Environment is set up correctly.
## Requirements
1. Run `npm install` to install all dependencies for the project.

2. Rename the `.envRename` file to just `.env`. This will allow access to the sercet code for jwt, the port number, as well as the DataBase paths.

3. Create a folder called `data` in the root folder.

4. Confirm that you want to run the application on the default port `3000`. The default can be changed in the `.env` file. Locate the port variable on line 1 and set the port to whatever port you have free on your system. If somonething goes wrong the apllication will default to port `9000`.

## Instructions

1. To start the server run `npm start` in the ternimal. The terminal will display API server ready on http://localhost: + `port`.

2. Navigate to http://localhost: + `port`/{entries} to access the API. Instructions on how to use the API is below.

**Note** To start the development server run `npm run dev`. Nodemon will fire up on the default port and the site can be accessed from  http://localhost: + `port`. When you save the development server will restart automatically.

##### API Usauge #######

**Create Entries** 
  # Create Contact From Entry
Route to _create_ an entry when the user submits their contact form:
    `POST /contact_form/entries`
  # Request body expected example (all properties required):
    ```json
    {
        "name": "some string",
        "email": "address@email.com", // must be a valid email address
        "phoneNumber": "2343331234",
        "content": "User's message goes here"
    }
    ```
  # Create User
Route to _create_ a user:
    `POST /users`
  # Request body accepted example (all properties required):
    ```json
    {
        "name": "Some Name",
        "password": "password", ///////// must be minimum 8 characters
        "email": "address@email.com" //// must be a valid email address
    }
    ```
**Retrieve Entries**
All retrieve entries require a Webtoken.
  # Authenticate User
  Route to authenticate a registered user:
    `POST /auth`
  # Expected request body example (all properties required):
    ```json
    {
        "email": "address@email.com",
        "password": "somepassword"
    }
    ```
    Successful response will return an authentication token.

  # Request all Contact form entries in database
  Route to _get_ a listing of all submissions:
    ```
    `GET /contact_form/entries`
  # Expected request body contains a valid:
    Authorization: bearer token
    ```
    Upon success, an array consisting of all objects for the contact form entries will be displayed.

  # Request specific Contact form entry in database
  Route to _get_ a specific submission:    
    ```
    `GET /contact_form/entries/{id}`
  # Expected request:
    Authorization: bearer token
    ```
    If successful, the response, will be the requested item.
