# ASK
Write a simple JavaScript application which does the following in any framework or JS libraries (NodeJS, Angular, React) of your choice. You can use a local file / dyson / fakejson / any of your choice to mock the rest calls.

The application has to fetch data from 2 different rest API services.

- Both the APIs return id, firstName, lastName in an array format.
- One of the API - API1 returns JSON.
- API1 takes 5 seconds to return the response.
- Another API2 returns XML.
- API2 takes 10 seconds.

Once the response comes back, the data needs to be merged from both the APIs and sorted based on id. Both the APIs are independent and there is no order in calling the APIs. The code that you implement should be modular, should follow good coding practices, should be optimally designed and should be performance effective.

## Solution Changes Includes

Installed 2 packages into application:
- axios  --> Which helps to fetch the data from api's 
- xml-js --> which helps to convert xml data into json

Modularized the code into
- helpers into common folder
- services --> api calls will go into this
- models   --> data types are defined class/interface
- store    --> this helps to add extra logic actions required to perform
- feature components (i.e employees) --> react component

We have JSON and XML file kept in public folder in local and fetch the data using the axios get method by passing the relevant configuration 
- Used Promise.allSettled to get the data after 2 requests are done processing [from here](https://github.com/VenkateshChunchu/react_test/blob/main/src/services/employeeservice.ts), 
- converted the data into JSON format using xml-js library and format the data [in here](https://github.com/VenkateshChunchu/react_test/blob/main/src/common/helper.ts)
- Once the conversion is successfull, merge two lists into one and return the list by sorting with id [from here](https://github.com/VenkateshChunchu/react_test/blob/main/src/services/employeeservice.ts)
- Called this getData function into store where we can add actions and manipulate the data if we want to.
- In container component call the store method to fetch the data inside the component in componentDidmount method and set the state
- Return the Employee list component inside the container component [in here](https://github.com/VenkateshChunchu/react_test/blob/main/src/employees/container_component.tsx)

# To run in local
- Clone the repo and insall the dependencies 
- Then run npm start

# Can be improved
- Serialize and Deserialize the response based the on the Model fields
- Improve XMLtoJSON function based on what is expected input or add the small library which does the job for us
- Add unit test case and functional test cases for each logic we written using Jest and Enzyme
- Better logging in Service, error handling, retry if required and we can also add error boundary components for further improvements

-----------------------------------------------------------------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
