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
      "product_name": "String",
      "ratings": "INT",
      "category_1": "String",
      "category_2": "String",
      "reg_price": "Number",
      "color_1": "String",
      "color_2": "String",
      "color_3": "String",
      "in_stock_sizes": "JSON",
      "sale_promotion": "JSON"
    }
```

### Add product variant
  * POST `/api/product_variants`

**Success Status Code:** `201`

**Request Body:**

Requires JSON with the following keys:

```json
    {
      "product_id": "Number",
      "product_name": "String",
      "category_1": "String",
      "reg_price": "Number",
      "color_1": "String",
      "unisex": "Boolean",
    }
```

The following optional keys may also be included:

```json
    {
      "ratings": "Number",
      "category_2": "String",
      "color_2": "String",
      "color_3": "String",
    }
```

### Update product variant info
  * PATCH `/api/product_variants/:product_variant_id`

**Path Parameters:**
  * `product_variant_id` product variant id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "product_id": "Number",
      "product_name": "String",
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
  * DELETE `/api/product_variants/:product_variant_id/`

**Path Parameters:**
  * `product_variant_id` product variant id

**Success Status Code:** `204`

---

### Get product variant inventory
  * GET `/api/product_variants/:product_variant_id/inventory`

**Path Parameters:**
  * `product_variant_id` product variant id

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
  * POST `/api/product_variants/:product_variant_id/inventory`

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
  * PATCH `/api/product_variants/:product_variant_id/inventory`

**Path Parameters:**
  * `product_variant_id` product variant id

**Success Status Code:** `204`

**Request Body:**

Requires JSON with the following keys.

```json
    {
      "size": "Number",
      "stock": "Number"
    }
```

---

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

**Success Status Code:** `204`