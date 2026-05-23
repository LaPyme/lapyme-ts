# Suppliers

## Overview

### Available Operations

* [list](#list) - Listar proveedores (v2)

## list

Lista los proveedores de la organización. Soporta búsqueda por nombre, CUIT o email.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listV2Suppliers" method="get" path="/api/v2/suppliers" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.suppliers.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { suppliersList } from "lapyme/funcs/suppliers-list.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await suppliersList(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("suppliersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListV2SuppliersRequest](../../models/operations/list-v2-suppliers-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListV2SuppliersResponse](../../models/operations/list-v2-suppliers-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.V2ErrorEnvelope1   | 400, 401, 403             | application/json          |
| errors.V2ErrorEnvelope1   | 429                       | application/json          |
| errors.V2ErrorEnvelope1   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |