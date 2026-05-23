# StockMovements

## Overview

### Available Operations

* [createStockMovement](#createstockmovement) - Crear movimiento de stock

## createStockMovement

Registra un movimiento manual para ajustar stock de un producto o variante.

Required scopes: `products:write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createApiStockMovement" method="post" path="/api/v1/stock-movements" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.stockMovements.createStockMovement({
    idempotencyKey: "<value>",
    body: {
      warehouseId: "bd7bbffc-54b1-41ee-9e14-243256fb1a18",
      mode: "replace",
      operationDate: new Date("2026-04-01T10:38:32.297Z"),
      reason: "<value>",
      items: [],
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
import { stockMovementsCreateStockMovement } from "lapyme/funcs/stock-movements-create-stock-movement.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await stockMovementsCreateStockMovement(lapyme, {
    idempotencyKey: "<value>",
    body: {
      warehouseId: "bd7bbffc-54b1-41ee-9e14-243256fb1a18",
      mode: "replace",
      operationDate: new Date("2026-04-01T10:38:32.297Z"),
      reason: "<value>",
      items: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stockMovementsCreateStockMovement failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiStockMovementRequest](../../models/operations/create-api-stock-movement-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiStockMovementResponse](../../models/operations/create-api-stock-movement-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 404, 409   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |