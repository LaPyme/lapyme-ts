# Purchases

## Overview

### Available Operations

* [listPurchases](#listpurchases) - Listar compras
* [createPurchase](#createpurchase) - Crear compra
* [getPurchaseById](#getpurchasebyid) - Obtener compra por ID
* [applyPurchaseTags](#applypurchasetags) - Aplicar etiquetas a compras

## listPurchases

Lista las compras de la organización. Soporta filtros por fecha, importe y búsqueda de proveedor.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiPurchases" method="get" path="/api/v1/purchases" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.listPurchases({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { purchasesListPurchases } from "lapyme/funcs/purchases-list-purchases.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesListPurchases(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesListPurchases failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiPurchasesRequest](../../models/operations/list-api-purchases-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiPurchasesResponse](../../models/operations/list-api-purchases-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createPurchase

Registra una compra y devuelve la operación creada junto con sus efectos de stock y contabilidad.

### Example Usage: created

<!-- UsageSnippet language="typescript" operationID="createApiPurchase" method="post" path="/api/v1/purchases" example="created" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.createPurchase({
    idempotencyKey: "<value>",
    body: {
      voucherType: 51105,
      currency: "PES",
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
import { purchasesCreatePurchase } from "lapyme/funcs/purchases-create-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesCreatePurchase(lapyme, {
    idempotencyKey: "<value>",
    body: {
      voucherType: 51105,
      currency: "PES",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesCreatePurchase failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="createApiPurchase" method="post" path="/api/v1/purchases" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.createPurchase({
    idempotencyKey: "<value>",
    body: {
      voucherType: 51105,
      currency: "PES",
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
import { purchasesCreatePurchase } from "lapyme/funcs/purchases-create-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesCreatePurchase(lapyme, {
    idempotencyKey: "<value>",
    body: {
      voucherType: 51105,
      currency: "PES",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesCreatePurchase failed:", res.error);
  }
}

run();
```
### Example Usage: purchase_with_receipt

<!-- UsageSnippet language="typescript" operationID="createApiPurchase" method="post" path="/api/v1/purchases" example="purchase_with_receipt" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.createPurchase({
    idempotencyKey: "<value>",
    body: {
      supplierId: "afafcbec-9d94-4174-8d5c-ec8d72780947",
      voucherType: 1,
      supplierInvoiceNumber: "0001-00000002",
      invoiceDate: new Date("2026-03-10"),
      warehouseId: "550e8400-e29b-41d4-a716-446655440010",
      productsReceived: true,
      updateProductVariantCost: true,
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          quantity: 3,
          unitCost: 8250,
          taxRateId: 5,
        },
      ],
      currency: "PES",
      exchangeRate: 1,
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
import { purchasesCreatePurchase } from "lapyme/funcs/purchases-create-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesCreatePurchase(lapyme, {
    idempotencyKey: "<value>",
    body: {
      supplierId: "afafcbec-9d94-4174-8d5c-ec8d72780947",
      voucherType: 1,
      supplierInvoiceNumber: "0001-00000002",
      invoiceDate: new Date("2026-03-10"),
      warehouseId: "550e8400-e29b-41d4-a716-446655440010",
      productsReceived: true,
      updateProductVariantCost: true,
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          quantity: 3,
          unitCost: 8250,
          taxRateId: 5,
        },
      ],
      currency: "PES",
      exchangeRate: 1,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesCreatePurchase failed:", res.error);
  }
}

run();
```
### Example Usage: purchase_without_receipt

<!-- UsageSnippet language="typescript" operationID="createApiPurchase" method="post" path="/api/v1/purchases" example="purchase_without_receipt" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.createPurchase({
    idempotencyKey: "<value>",
    body: {
      supplierId: "afafcbec-9d94-4174-8d5c-ec8d72780947",
      voucherType: 1,
      supplierInvoiceNumber: "0001-00000001",
      invoiceDate: new Date("2026-03-10"),
      productsReceived: false,
      updateProductVariantCost: true,
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          quantity: 1,
          unitCost: 8250,
          taxRateId: 5,
        },
      ],
      currency: "PES",
      exchangeRate: 1,
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
import { purchasesCreatePurchase } from "lapyme/funcs/purchases-create-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesCreatePurchase(lapyme, {
    idempotencyKey: "<value>",
    body: {
      supplierId: "afafcbec-9d94-4174-8d5c-ec8d72780947",
      voucherType: 1,
      supplierInvoiceNumber: "0001-00000001",
      invoiceDate: new Date("2026-03-10"),
      productsReceived: false,
      updateProductVariantCost: true,
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          quantity: 1,
          unitCost: 8250,
          taxRateId: 5,
        },
      ],
      currency: "PES",
      exchangeRate: 1,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesCreatePurchase failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiPurchaseRequest](../../models/operations/create-api-purchase-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiPurchaseResponse](../../models/operations/create-api-purchase-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 409, 412   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getPurchaseById

Devuelve el detalle de la compra.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiPurchaseById" method="get" path="/api/v1/purchases/{purchase_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.getPurchaseById({
    purchaseId: "636ff420-e532-471b-a7a6-9fbe903f6366",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { purchasesGetPurchaseById } from "lapyme/funcs/purchases-get-purchase-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesGetPurchaseById(lapyme, {
    purchaseId: "636ff420-e532-471b-a7a6-9fbe903f6366",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesGetPurchaseById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiPurchaseByIdRequest](../../models/operations/get-api-purchase-by-id-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiPurchaseByIdResponse](../../models/operations/get-api-purchase-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 401, 403, 404             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## applyPurchaseTags

Agrega y/o remueve etiquetas de scope `purchase` en un lote de compras.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="applyApiPurchaseTags" method="post" path="/api/v1/purchases/tags/apply" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.purchases.applyPurchaseTags({
    body: {
      entityIds: [
        "0469524a-e66f-4008-917d-634d39d7c2e4",
      ],
      addTagIds: [
        "5ad87872-f143-4111-ab29-c1f22b980bc5",
        "9932b290-bf4a-4163-8ab6-83eb57fcff3b",
        "ddaaf310-6ba3-46a1-a83d-592de6b0589d",
      ],
      removeTagIds: [],
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
import { purchasesApplyPurchaseTags } from "lapyme/funcs/purchases-apply-purchase-tags.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await purchasesApplyPurchaseTags(lapyme, {
    body: {
      entityIds: [
        "0469524a-e66f-4008-917d-634d39d7c2e4",
      ],
      addTagIds: [
        "5ad87872-f143-4111-ab29-c1f22b980bc5",
        "9932b290-bf4a-4163-8ab6-83eb57fcff3b",
        "ddaaf310-6ba3-46a1-a83d-592de6b0589d",
      ],
      removeTagIds: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("purchasesApplyPurchaseTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApplyApiPurchaseTagsRequest](../../models/operations/apply-api-purchase-tags-request.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ApplyApiPurchaseTagsResponse](../../models/operations/apply-api-purchase-tags-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |