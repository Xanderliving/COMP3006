
# Comp 3006 React

This project is a website for the comapny 'Cocktail Crafters'. The website is a react and test driven code. The use of MongoDB online is used for the database. <br>
Youtube<br>
https://youtu.be/DrWJ2N4fNpk?si=N5rOFESQjlx3s_vv
## Running the code

There is 2 ways to run this code

On way is docker <br>
 -Download the file off github (make sure it is not on Onedrive)<br>
 In the command line "Code"
 ```bash
  docker-compose build
  docker-compsoe up
```
  And the code should work.
  
  The otherway is just off the system <br>
   -Download the file off github (make sure it is not on Onedrive)<br>
 In the command line "Frontend"
 ```bash
  npm install
  npm install -force
  npm start
```
 In the command line "Backend"
 ```bash
  npm install
  npm start
```
  And the code should work.


## Features

- CRUD
- Websockets
- Mobile Screen mode
- Cross platform


## Running Tests

To run tests, run the following command

```bash
  CD /frontend/
  run test
```

## Tech Used

**Client:** React, Axios, Chai, react-router-dom

**Server:** Node, Express, Mongoose


## Demo

Insert Youtube link


## API Reference

#### Items Schema
```http
  /items
```
| Parameter | Type     |                
| :-------- | :------- | 
| `Name` | `string` | 
| `Description` | `string` |
| `Cost` | `Integer` |

#### User Schema
```http
  /user
```
| Parameter | Type     |                
| :-------- | :------- | 
| `Email` | `string` | 
| `Password` | `string` |

#### Basket Schema
```http
  /Basket
```
| Parameter | Type     |                
| :-------- | :------- | 
| `Customer` | `string` | 
| `item` | `string` |
| `Cost` | `Integer` |
| `Quantity` | `Integer` |



