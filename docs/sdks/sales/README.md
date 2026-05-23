# Sales

## Overview

### Available Operations

* [list](#list) - Listar ventas
* [create](#create) - Crear venta
* [getSaleById](#getsalebyid) - Obtener venta por ID

## list

Lista las ventas de la organización. Soporta filtros por cliente, fecha, estado, punto de venta, vendedor e integración.

Required scopes: `sales:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listApiSales" method="get" path="/api/v1/sales" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.sales.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { salesList } from "lapyme/funcs/sales-list.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await salesList(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiSalesRequest](../../models/operations/list-api-sales-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiSalesResponse](../../models/operations/list-api-sales-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## create

Registra una venta y devuelve la operación creada junto con sus efectos fiscales, de stock, pagos y contabilidad.

Required scopes: `sales:write`.

### Example Usage: created

<!-- UsageSnippet language="typescript" operationID="createApiSale" method="post" path="/api/v1/sales" example="created" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.sales.create({
    idempotencyKey: "<value>",
    body: {
      voucherType: 333661,
      pointOfSaleId: "35e55db7-6512-409b-b6ca-d324c6672ab1",
      invoiceDate: new Date("2024-09-19"),
      currency: "DOL",
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
import { salesCreate } from "lapyme/funcs/sales-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await salesCreate(lapyme, {
    idempotencyKey: "<value>",
    body: {
      voucherType: 333661,
      pointOfSaleId: "35e55db7-6512-409b-b6ca-d324c6672ab1",
      invoiceDate: new Date("2024-09-19"),
      currency: "DOL",
      items: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="createApiSale" method="post" path="/api/v1/sales" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.sales.create({
    idempotencyKey: "<value>",
    body: {
      voucherType: 333661,
      pointOfSaleId: "35e55db7-6512-409b-b6ca-d324c6672ab1",
      invoiceDate: new Date("2024-09-19"),
      currency: "DOL",
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
import { salesCreate } from "lapyme/funcs/sales-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await salesCreate(lapyme, {
    idempotencyKey: "<value>",
    body: {
      voucherType: 333661,
      pointOfSaleId: "35e55db7-6512-409b-b6ca-d324c6672ab1",
      invoiceDate: new Date("2024-09-19"),
      currency: "DOL",
      items: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: product_sale_with_payment

<!-- UsageSnippet language="typescript" operationID="createApiSale" method="post" path="/api/v1/sales" example="product_sale_with_payment" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.sales.create({
    idempotencyKey: "<value>",
    body: {
      customerId: "550e8400-e29b-41d4-a716-446655440101",
      voucherType: 6,
      pointOfSaleId: "550e8400-e29b-41d4-a716-446655440002",
      invoiceDate: new Date("2026-04-18"),
      dueDate: new Date("2026-04-18"),
      currency: "PES",
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          warehouseId: "550e8400-e29b-41d4-a716-446655440010",
          taxRateId: 5,
          quantity: 2,
          unitPrice: 12500,
        },
      ],
      paymentMethods: [
        {
          methodId: "550e8400-e29b-41d4-a716-446655440301",
          amount: 25000,
        },
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
import { salesCreate } from "lapyme/funcs/sales-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await salesCreate(lapyme, {
    idempotencyKey: "<value>",
    body: {
      customerId: "550e8400-e29b-41d4-a716-446655440101",
      voucherType: 6,
      pointOfSaleId: "550e8400-e29b-41d4-a716-446655440002",
      invoiceDate: new Date("2026-04-18"),
      dueDate: new Date("2026-04-18"),
      currency: "PES",
      items: [
        {
          productId: "9c692e8b-0f9a-4f7c-8b99-061a2eb188ae",
          warehouseId: "550e8400-e29b-41d4-a716-446655440010",
          taxRateId: 5,
          quantity: 2,
          unitPrice: 12500,
        },
      ],
      paymentMethods: [
        {
          methodId: "550e8400-e29b-41d4-a716-446655440301",
          amount: 25000,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: service_sale_pending_payment

<!-- UsageSnippet language="typescript" operationID="createApiSale" method="post" path="/api/v1/sales" example="service_sale_pending_payment" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.sales.create({
    idempotencyKey: "<value>",
    body: {
      voucherType: 90,
      pointOfSaleId: "550e8400-e29b-41d4-a716-446655440002",
      invoiceDate: new Date("2026-04-18"),
      dueDate: new Date("2026-04-18"),
      currency: "PES",
      items: [
        {
          name: "Technical service",
          productType: "service",
          taxRateId: 5,
          quantity: 1,
          unitPrice: 10000,
        },
      ],
      isFullAmountPending: true,
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
import { salesCreate } from "lapyme/funcs/sales-create.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await salesCreate(lapyme, {
    idempotencyKey: "<value>",
    body: {
      voucherType: 90,
      pointOfSaleId: "550e8400-e29b-41d4-a716-446655440002",
      invoiceDate: new Date("2026-04-18"),
      dueDate: new Date("2026-04-18"),
      currency: "PES",
      items: [
        {
          name: "Technical service",
          productType: "service",
          taxRateId: 5,
          quantity: 1,
          unitPrice: 10000,
        },
      ],
      isFullAmountPending: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiSaleRequest](../../models/operations/create-api-sale-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiSaleResponse](../../models/operations/create-api-sale-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403, 409, 412   | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getSaleById

Devuelve el detalle de la venta.

Required scopes: `sales:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiSaleById" method="get" path="/api/v1/sales/{sale_id}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.sales.getSaleById({
    saleId: "febb91d1-cb64-4300-87ab-b7891a56c2d2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { salesGetSaleById } from "lapyme/funcs/sales-get-sale-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await salesGetSaleById(lapyme, {
    saleId: "febb91d1-cb64-4300-87ab-b7891a56c2d2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesGetSaleById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiSaleByIdRequest](../../models/operations/get-api-sale-by-id-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetApiSaleByIdResponse](../../models/operations/get-api-sale-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 401, 403, 404             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |