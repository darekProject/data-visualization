## Astronomy Picture of the Day - NASA

The application presents Astronomy Picture of the Day - NASA. Sometimes it is a picture and sometimes a movie.
 
The project used the official [NASA API] (https://api.nasa.gov) and React/Redux technologies.
When building the application, it was used [Create React App](https://github.com/facebookincubator/create-react-app).

## Run app: 
- npm install
- npm start

## Run test (soon): 
 - npm test 

## Summary

In the application, I tried to keep the rules that each component has its own folder with the same name as the component for better identification, 
this folder also contains the css file for the component. This approach can generate a lot of file nesting, but it seems to me that it organizes applications well.
The use of Redux here facilitates many things, for example using action creators and better management of data in the application. The use of this technology 
also allows better development of the application.

In the future, I need to think about even better file organization and the use of a css preprocessor, for example sass.
I did not use the sass preprocessor now because the css files are very small.