# StockPerWarehouse

## Overview

### Available Operations

* [list](#list) - Obtener stock por ubicación

## list

Devuelve una lista paginada del stock de productos por ubicación de la organización. Podés filtrar por producto específico o ubicación específica usando los parámetros correspondientes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getStockPerWarehouse" method="get" path="/api/v1/stock-per-warehouse" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.stockPerWarehouse.list({
    productId: "prod-123e4567",
    warehouseId: "wh-123e4567",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { stockPerWarehouseList } from "lapyme/funcs/stock-per-warehouse-list.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await stockPerWarehouseList(lapyme, {
    productId: "prod-123e4567",
    warehouseId: "wh-123e4567",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("stockPerWarehouseList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStockPerWarehouseRequest](../../models/operations/get-stock-per-warehouse-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetStockPerWarehouseResponse](../../models/operations/get-stock-per-warehouse-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.RateLimitedError2  | 429                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |