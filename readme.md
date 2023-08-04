## Mid Term Project GIGIH Fullstack Engineer

## Table Of Content

* [Database Structure](#database-structure)
	* [Videos Collection](#videos-collection)
	* [Comment Collection](#comment-collection)
* [API Structure](#api-structure)
* [API Request Response](#api-request-response)
* [How To Run](#how-to-run-in-local)

## Database Structure
This project have 1 collection, products.

### Product Collection

```
  {
        video_id: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },

        Product: [{
            product_id: {
                type: String,
                required: true
            },
            product_name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product_thumbnail: {
                type: String,
                required: true
            },
        }]
    },
 ```



## API Structure

Endpoint ready to use

```
GET   /products
POST  /products
```

## API Request Response


### GET /products

----
Return all videos from databases.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  result : [
    {
        video_id: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },

        Product: [{
            product_id: {
                type: String,
                required: true
            },
            product_name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product_thumbnail: {
                type: String,
                required: true
            },
        }]
    },
  ]
}
```




----
Return all comment from databases.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  result : [
    {
      videoId,
      username,
      comment
    }
  ]
}
```


### POST /product/post

----
Creates a new Products and returns the new object.
* **URL Params**  
  None
* **Data Params**  
  
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
```

## How To Run In Local

### Installation

This project use Node version 18.16

Make sure to install the dependencies:
```
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install

```

### Development Server
Start the development server on http://localhost:3000

```
# yarn
yarn start

# npm
npm start

# pnpm
pnpm start
```