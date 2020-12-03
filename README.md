## Server API

### Get product info
  * GET `/api/products/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "cost": "Number"
    }
```

### Add product
  * POST `/api/products`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "googleMap": "String location",
      "cost": "Number"
    }
```


### Update product info
  * PATCH `/api/product/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "name": "String",
      "address": "String",
      "phone": "String",
      "website": "String",
      "cost": "Number"
    }
```

### Delete product
  * DELETE `/api/product/:id`

**Path Parameters:**
  * `id` product id

**Success Status Code:** `204`

<!-- ### Add image to product
  * POST `/api/products/:productId/images`

**Path Parameters:**

  * `productId` product id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "user": "String",
      "image": "image URL",
      "description": "String",
      "posted": "YYYY-MM-MM",
      "googleMap": "String location",
      "category": "String",
      "restaurant": "id Number",
      "cost": "Number"
    }
``` -->