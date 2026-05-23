# Purchases

## Overview

### Available Operations

* [create](#create) - Crear compra (v2)

## create

Crea una compra. `mode: "preview"` valida el payload sin escribir; `mode: "commit"` ejecuta la compra. `Idempotency-Key` es requerido en commit.

### Example Usage: commit

<!-- UsageSnippet language="typescript" operationID="createV2Purchase" method="post" path="/api/v2/purchases" example="commit" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.create({
    body: {
      mode: "preview",
      input: {
        voucherType: 911669,
        currency: "DOL",
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
import { purchasesCreate } from "lapyme/funcs/purchases-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesCreate(lapyme, {
    body: {
      mode: "preview",
      input: {
        voucherType: 911669,
        currency: "DOL",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="createV2Purchase" method="post" path="/api/v2/purchases" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.create({
    body: {
      mode: "preview",
      input: {
        voucherType: 911669,
        currency: "DOL",
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
import { purchasesCreate } from "lapyme/funcs/purchases-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesCreate(lapyme, {
    body: {
      mode: "preview",
      input: {
        voucherType: 911669,
        currency: "DOL",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: preview

<!-- UsageSnippet language="typescript" operationID="createV2Purchase" method="post" path="/api/v2/purchases" example="preview" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.create({
    body: {
      mode: "preview",
      input: {
        voucherType: 911669,
        currency: "DOL",
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
import { purchasesCreate } from "lapyme/funcs/purchases-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesCreate(lapyme, {
    body: {
      mode: "preview",
      input: {
        voucherType: 911669,
        currency: "DOL",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateV2PurchaseRequest](../../models/operations/create-v2-purchase-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateV2PurchaseResponse](../../models/operations/create-v2-purchase-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.V2ErrorEnvelope2   | 400, 401, 403, 409, 412   | application/json          |
| errors.V2ErrorEnvelope2   | 429                       | application/json          |
| errors.V2ErrorEnvelope2   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |