
# Comp 3006 React

This project is a website for the comapny 'Cocktail Crafters'. The website is a react and test driven code. The use of MongoDB online is used for the database.


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


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


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
  /items
```
| Parameter | Type     |                
| :-------- | :------- | 
| `Customer` | `string` | 
| `item` | `string` |
| `Cost` | `Integer` |
| `Quantity` | `Integer` |



