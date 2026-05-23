# Transfers

## Overview

### Available Operations

* [create](#create) - Crear nueva transferencia

## create

Crea una nueva transferencia de productos entre depósitos de la organización. Requiere depósitos de origen y destino diferentes, fecha de transferencia y al menos un producto con cantidad.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createTransfer" method="post" path="/api/v1/transfers" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.transfers.create({
    sourceWarehouseId: "ea9f2225-403b-4e2c-93b0-0eda090ffa65",
    targetWarehouseId: "d6903402-776f-48d6-8fba-0358959d34e5",
    transferDate: new Date("2026-07-31T09:19:08.808Z"),
    items: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { transfersCreate } from "lapyme/funcs/transfers-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await transfersCreate(lapyme, {
    sourceWarehouseId: "ea9f2225-403b-4e2c-93b0-0eda090ffa65",
    targetWarehouseId: "d6903402-776f-48d6-8fba-0358959d34e5",
    transferDate: new Date("2026-07-31T09:19:08.808Z"),
    items: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateTransferRequest](../../models/create-transfer-request.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTransferResponse](../../models/operations/create-transfer-response.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.CreateTransferBadRequestError | 400                                  | application/json                     |
| errors.CreateTransferNotFoundError   | 404                                  | application/json                     |
| errors.RateLimitedError1             | 429                                  | application/json                     |
| errors.LapymeDefaultError            | 4XX, 5XX                             | \*/\*                                |