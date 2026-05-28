# SaleTags

## Overview

### Available Operations

* [apply](#apply) - Aplicar etiquetas a ventas

## apply

Agrega y/o remueve etiquetas de scope `sale` en un lote de ventas.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="applyApiSaleTags" method="post" path="/api/v1/sales/tags/apply" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.saleTags.apply({
    body: {
      entityIds: [
        "1ad49fba-1b81-41f0-a591-3523589f53fc",
      ],
      addTagIds: [
        "69840faa-66cf-4a83-b132-1830aa6eaaee",
      ],
      removeTagIds: [
        "88ff7f46-14de-469c-b72c-df4b20169ed1",
      ],
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
import { saleTagsApply } from "lapyme/funcs/sale-tags-apply.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await saleTagsApply(lapyme, {
    body: {
      entityIds: [
        "1ad49fba-1b81-41f0-a591-3523589f53fc",
      ],
      addTagIds: [
        "69840faa-66cf-4a83-b132-1830aa6eaaee",
      ],
      removeTagIds: [
        "88ff7f46-14de-469c-b72c-df4b20169ed1",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("saleTagsApply failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApplyApiSaleTagsRequest](../../models/operations/apply-api-sale-tags-request.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApplyApiSaleTagsResponse](../../models/operations/apply-api-sale-tags-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |