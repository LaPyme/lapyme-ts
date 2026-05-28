# ProductBulkAdjustments

## Overview

### Available Operations

* [create](#create) - Actualizar productos masivamente

## create

Aplica ajustes masivos de costo o precio base sobre una selección de productos.

### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="createApiProductBulkAdjustment" method="post" path="/api/v1/products/bulk-adjustments" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.productBulkAdjustments.create({
    idempotencyKey: "<value>",
    body: {
      target: "price",
      operationType: "increase",
      adjustmentType: "percentage",
      adjustmentValue: 7125.57,
      selection: {
        type: "specific",
        ids: [
          "2c4fe136-10f0-46a3-bebc-3a3de17ba5bd",
        ],
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { productBulkAdjustmentsCreate } from "lapyme/funcs/product-bulk-adjustments-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await productBulkAdjustmentsCreate(lapyme, {
    idempotencyKey: "<value>",
    body: {
      target: "price",
      operationType: "increase",
      adjustmentType: "percentage",
      adjustmentValue: 7125.57,
      selection: {
        type: "specific",
        ids: [
          "2c4fe136-10f0-46a3-bebc-3a3de17ba5bd",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productBulkAdjustmentsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: supplierCostIncrease

<!-- UsageSnippet language="typescript" operationID="createApiProductBulkAdjustment" method="post" path="/api/v1/products/bulk-adjustments" example="supplierCostIncrease" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.productBulkAdjustments.create({
    idempotencyKey: "<value>",
    body: {
      target: "cost",
      operationType: "increase",
      adjustmentType: "percentage",
      adjustmentValue: 5,
      defaultSupplierId: "550e8400-e29b-41d4-a716-446655440201",
      selection: {
        type: "all",
        excludedIds: [],
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { productBulkAdjustmentsCreate } from "lapyme/funcs/product-bulk-adjustments-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await productBulkAdjustmentsCreate(lapyme, {
    idempotencyKey: "<value>",
    body: {
      target: "cost",
      operationType: "increase",
      adjustmentType: "percentage",
      adjustmentValue: 5,
      defaultSupplierId: "550e8400-e29b-41d4-a716-446655440201",
      selection: {
        type: "all",
        excludedIds: [],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productBulkAdjustmentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiProductBulkAdjustmentRequest](../../models/operations/create-api-product-bulk-adjustment-request.md)                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiProductBulkAdjustmentResponse](../../models/operations/create-api-product-bulk-adjustment-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 409        | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |