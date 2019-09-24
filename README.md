# Essentialism API

## HTTP Requests

### Base URL
https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com (Hint: set this as your baseURL in your `axiosWithAuth` function)




## `GET` Requests
| Req Type | Return Data | URL | Status Code |
| :------- | :---------- | :-- | :---------- |
| GET | all values, template | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/values | 200 |
| GET | top 10 values | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/values/top10 | 200 |
| GET | top 3 values | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/values/top3 | 200 |
| GET | all tasks  | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/tasks/ | 200 |
| GET | Task by ID | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/tasks/:id | 200 |

## `POST` Requests
| Req Type | Return Data | URL | Status Code |
| :------- | :---------- | :-- | :---------- |
| POST (register) | id of created user | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/auth/register | 201 |
| POST (login) | JWT token and user_id | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/auth/login | 201 |
| POST | ID of created task | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/tasks | 201 |
| POST | ID of created value | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/values | 201 |

## `DELETE` Requests
| Req Type | Return Data | URL | Status Code |
| :------- | :---------- | :-- | :---------- |
| DELETE | All tasks | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/tasks | 410 |
| DELETE | Task by ID | https://cors-anywhere.herokuapp.com/https://essentialism-be.herokuapp.com/api/tasks/:id | 410 |







