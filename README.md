# [LIVE](https://jhuppe-mangia.herokuapp.com/)

# Tech Stack
- [React](https://reactjs.org/docs/getting-started.html)
- [React Auto-Suggest](https://github.com/moroshko/react-autosuggest#installation)
- [Sass](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [Yarn](https://yarnpkg.com/en/docs)

# Local set up
###### Ensure that all of the above technologies are available on your local machine
1. Run `git clone https://github.com/jhuppe/mangia && cd mangia && yarn install`
2. Start the app by running `yarn start`
###### Ready! Go to: [http://localhost:3000](http://localhost:3000)

## To Do
- [X] Display API response in individual cards
- [X] Responsive design
- [X] Add ingredient modal for recipes
- [X] Handling errors
- [X] Auto-suggest when searching

### Landing Page

The user is prompted to enter a recipe name or category to receive results. 
![mangiaLandingPage](https://user-images.githubusercontent.com/14873941/55004574-1c51df00-4fa0-11e9-99d3-4f0cd68e63e0.png)


### Search Assistant
Search suggestions are provided utilizing the react-autosuggest component. 
![mangiaSuggestions](https://user-images.githubusercontent.com/14873941/55004577-1c51df00-4fa0-11e9-8c36-6d699f6eadc6.png)

### Recipe Results
Recipe results are returned by using the Edamam Recipe API.
![mangiaRecipeResults](https://user-images.githubusercontent.com/14873941/55004575-1c51df00-4fa0-11e9-9525-19a7361d812c.png)

### Ingredients Modal
Ingredients and corresponding amounts are displayed to the user in an easy to read format. 
![mangiaIngredientsModal](https://user-images.githubusercontent.com/14873941/55004573-1c51df00-4fa0-11e9-9a6c-ebd2b79541a6.png)

## License
[MIT](https://github.com/jhuppe/mangia/blob/master/LICENSE)
