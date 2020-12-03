## Server API

### Get product variant info
  * GET `/api/product_variants/:product_variant_id`

**Path Parameters:**
  * `product_variant_id` product variant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "product_variant_id": "Number",
      "product_id": "String",
      "reg_price": "Number",
      "color_1": "String",
      "color_2": "String",
      "color_3": "String",
      "inventory": "JSON",
      "promos": "JSON"
    }
```

### Add product variant
  * POST `/api/product_variants`

**Success Status Code:** `201`

**Request Body:**
Requires JSON with the following keys.

```json
    {
      "product_id": "Number",
      "product_name": "String",
      "category_1": "String",
      "reg_price": "Number",
      "color_1": "String",
    }
```

The following optional keys may also be included:

```json
    {
      "category_2": "String",
      "color_2": "String",
      "color_3": "String",
      // "inventory": {
      //   "6": "Number",
      //   "6.5": "Number",
      //   "7": "Number",
      //   "etc": "Number"
      // },
      // "sale_promos**": {
      //   "title": "Number",
      //   "content": "Number",
      //   "discount": "Number"
      // }
    }
```
<!-- The inventory key expects a JSON object with shoe sizes and inventory as keys -->

### Add inventory
  * POST `/api/product_variants/:product_variants_id/inventory`

**Success Status Code:** `201`

**Request Body:**
Requires JSON with the following keys.

```json
    {
      "product_id": "Number",
      "6": "Number",
      .
      .
      .
      "reg_price": "Number",
      "color_1": "String",
    }
```

### Get product info
  * GET `/api/products/:product_id`

**Path Parameters:**
  * `product_id` product id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "product_id": "Number",
      "product_name": "String",
      "ratings": "Number",
      "category_1": "String",
      "category_2": "String",
      "product_variants": "JSON[]"
    }
```

### Add product
  * POST `/api/products`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "product_id": "Number",
      "product_name": "String",
      "ratings": "Number",
      "category_1": "String",
      "category_2": "String"
    }
```


### Update product info
  * PATCH `/api/product/:id`

**Path Parameters:**
  * `product_id` product id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "product_id": "Number",
      "product_name": "String",
      "ratings": "Number",
      "category_1": "String",
      "category_2": "String"
    }
```

### Delete product
  * DELETE `/api/product/:product_id`

**Path Parameters:**
  * `product_id` product id

**Success Status Code:** `204`

