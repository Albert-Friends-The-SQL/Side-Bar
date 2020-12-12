## Server API

### Get product variant info
  * GET `/api/variants/:variant_id`

**Path Parameters:**
  * `variant_id` variant id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "variant_id": "Number",
      "product_id": "String",
      "variant_name": "String",
      "ratings": "INT",
      "category_1": "String",
      "category_2": "String",
      "reg_price": "Number",
      "color_1": "String",
      "color_2": "String",
      "color_3": "String",
      "in_stock_sizes": "Number[]"
    }
```

### Add product variant
  * POST `/api/variants`

**Success Status Code:** `201`

**Request Body:**

Requires JSON with the following keys:

```json
    {
      "product_id": "Number",
      "variant_name": "String",
      "category_1": "String",
      "reg_price": "Number",
      "color_1": "String",
      "unisex": "Boolean",
    }
```

The following optional keys may also be included:

```json
    {
      "category_2": "String",
      "color_2": "String",
      "color_3": "String",
    }
```

### Update product variant info
  * PATCH `/api/variants/:variant_id`

**Path Parameters:**
  * `variant_id` variant id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "product_id": "Number",
      "variant_name": "String",
      "category_1": "String",
      "category_2": "String",
      "reg_price": "Number",
      "color_1": "String",
      "color_2": "String",
      "color_3": "String",
      "unisex": "Boolean",
    }
```

### Delete product variant
  * DELETE `/api/variants/:variant_id/`

**Path Parameters:**
  * `variant_id` variant id

**Success Status Code:** `204`

---

### Get product variant inventory
  * GET `/api/variants/:variant_id/inventory`

**Path Parameters:**
  * `variant_id` variant id

**Success Status Code:** `200`

**Returns:** JSON with "shoe size"-"stock quantity" key-value pairs

```json
    {
      "6": "Number",
      "6.5": "Number",
      "7": "Number",
      "7.5": "Number",
      "etc": "Number"
    }
```

### Add inventory
  * POST `/api/variants/:variant_id/inventory`

**Success Status Code:** `201`

**Request Body:**

Requires JSON with the following keys.

```json
    {
      "product_id": "Number",
      "size": "Number",
      "stock": "Number"
    }
```

### Update inventory
  * PATCH `/api/variants/:variant_id/inventory`

**Path Parameters:**
  * `variant_id` product variant id

**Success Status Code:** `204`

**Request Body:**

Requires JSON with the following keys.

```json
    {
      "size": "Number",
      "stock": "Number"
    }
```

<!-- ---

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
      "unisex": "Boolean",
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
  * PATCH `/api/products/:id`

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
  * DELETE `/api/products/:product_id`

**Path Parameters:**
  * `product_id` product id

**Success Status Code:** `204` -->