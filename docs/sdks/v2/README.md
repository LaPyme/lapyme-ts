# V2

## Overview

### Available Operations

* [listV2Suppliers](#listv2suppliers) - Listar proveedores (v2)
* [listV2Products](#listv2products) - Listar productos (v2)
* [listV2Warehouses](#listv2warehouses) - Listar ubicaciones (v2)
* [listV2Purchases](#listv2purchases) - Listar compras (v2)
* [createV2Purchase](#createv2purchase) - Crear compra (v2)
* [queryV2Report](#queryv2report) - Consultar reporte (v2)
* [getV2PurchaseById](#getv2purchasebyid) - Obtener compra por ID (v2)

## listV2Suppliers

Lista los proveedores de la organización. Soporta búsqueda por nombre, CUIT o email.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listV2Suppliers" method="get" path="/api/v2/suppliers" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.listV2Suppliers({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2ListV2Suppliers } from "lapyme/funcs/v2-list-v2-suppliers.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2ListV2Suppliers(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2ListV2Suppliers failed:", res.error);
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
| errors.V2ErrorEnvelope    | 400, 401, 403             | application/json          |
| errors.V2ErrorEnvelope    | 429                       | application/json          |
| errors.V2ErrorEnvelope    | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listV2Products

Lista los productos de la organización con precios. Soporta búsqueda y filtros por categoría, tipo y estado.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listV2Products" method="get" path="/api/v2/products" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.listV2Products({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2ListV2Products } from "lapyme/funcs/v2-list-v2-products.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2ListV2Products(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2ListV2Products failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListV2ProductsRequest](../../models/operations/list-v2-products-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListV2ProductsResponse](../../models/operations/list-v2-products-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.V2ErrorEnvelope    | 400, 401, 403             | application/json          |
| errors.V2ErrorEnvelope    | 429                       | application/json          |
| errors.V2ErrorEnvelope    | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listV2Warehouses

Lista las ubicaciones activas de la organización.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listV2Warehouses" method="get" path="/api/v2/warehouses" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.listV2Warehouses({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2ListV2Warehouses } from "lapyme/funcs/v2-list-v2-warehouses.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2ListV2Warehouses(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2ListV2Warehouses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListV2WarehousesRequest](../../models/operations/list-v2-warehouses-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListV2WarehousesResponse](../../models/operations/list-v2-warehouses-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.V2ErrorEnvelope    | 400, 401, 403             | application/json          |
| errors.V2ErrorEnvelope    | 429                       | application/json          |
| errors.V2ErrorEnvelope    | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## listV2Purchases

Lista las compras de la organización. Soporta filtros por fecha, monto y búsqueda por proveedor.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listV2Purchases" method="get" path="/api/v2/purchases" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.listV2Purchases({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2ListV2Purchases } from "lapyme/funcs/v2-list-v2-purchases.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2ListV2Purchases(lapyme, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2ListV2Purchases failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListV2PurchasesRequest](../../models/operations/list-v2-purchases-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListV2PurchasesResponse](../../models/operations/list-v2-purchases-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.V2ErrorEnvelope    | 400, 401, 403             | application/json          |
| errors.V2ErrorEnvelope    | 429                       | application/json          |
| errors.V2ErrorEnvelope    | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## createV2Purchase

Crea una compra. `mode: "preview"` valida el payload sin escribir; `mode: "commit"` ejecuta la compra. `Idempotency-Key` es requerido en commit.

### Example Usage: commit

<!-- UsageSnippet language="typescript" operationID="createV2Purchase" method="post" path="/api/v2/purchases" example="commit" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.createV2Purchase({
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
import { v2CreateV2Purchase } from "lapyme/funcs/v2-create-v2-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2CreateV2Purchase(lapyme, {
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
    console.log("v2CreateV2Purchase failed:", res.error);
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
  const result = await lapyme.v2.createV2Purchase({
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
import { v2CreateV2Purchase } from "lapyme/funcs/v2-create-v2-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2CreateV2Purchase(lapyme, {
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
    console.log("v2CreateV2Purchase failed:", res.error);
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
  const result = await lapyme.v2.createV2Purchase({
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
import { v2CreateV2Purchase } from "lapyme/funcs/v2-create-v2-purchase.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2CreateV2Purchase(lapyme, {
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
    console.log("v2CreateV2Purchase failed:", res.error);
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
| errors.V2ErrorEnvelope    | 400, 401, 403, 409, 412   | application/json          |
| errors.V2ErrorEnvelope    | 429                       | application/json          |
| errors.V2ErrorEnvelope    | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## queryV2Report

Ejecuta una consulta analítica agrupada sobre ventas, compras o inventario. El campo `source` determina qué dimensiones y medidas están disponibles.

### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="queryV2Report" method="post" path="/api/v2/reports/query" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.queryV2Report({
    source: "sales",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [],
    dateBasis: "commercial",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2QueryV2Report } from "lapyme/funcs/v2-query-v2-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2QueryV2Report(lapyme, {
    source: "sales",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [],
    dateBasis: "commercial",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2QueryV2Report failed:", res.error);
  }
}

run();
```
### Example Usage: inventory_snapshot

<!-- UsageSnippet language="typescript" operationID="queryV2Report" method="post" path="/api/v2/reports/query" example="inventory_snapshot" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.queryV2Report({
    source: "inventory",
    dimensions: [
      "product",
      "warehouse",
    ],
    measures: [
      "stockOnHand",
      "stockAvailable",
    ],
    dateBasis: "commercial",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2QueryV2Report } from "lapyme/funcs/v2-query-v2-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2QueryV2Report(lapyme, {
    source: "inventory",
    dimensions: [
      "product",
      "warehouse",
    ],
    measures: [
      "stockOnHand",
      "stockAvailable",
    ],
    dateBasis: "commercial",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2QueryV2Report failed:", res.error);
  }
}

run();
```
### Example Usage: purchases_by_supplier

<!-- UsageSnippet language="typescript" operationID="queryV2Report" method="post" path="/api/v2/reports/query" example="purchases_by_supplier" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.queryV2Report({
    source: "purchases",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "supplier",
    ],
    measures: [
      "purchaseTotal",
      "purchaseCount",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2QueryV2Report } from "lapyme/funcs/v2-query-v2-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2QueryV2Report(lapyme, {
    source: "purchases",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "supplier",
    ],
    measures: [
      "purchaseTotal",
      "purchaseCount",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2QueryV2Report failed:", res.error);
  }
}

run();
```
### Example Usage: sales_by_product

<!-- UsageSnippet language="typescript" operationID="queryV2Report" method="post" path="/api/v2/reports/query" example="sales_by_product" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.queryV2Report({
    source: "sales",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "product",
    ],
    measures: [
      "total",
      "units",
      "count",
    ],
    includeTotals: true,
    dateBasis: "commercial",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2QueryV2Report } from "lapyme/funcs/v2-query-v2-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2QueryV2Report(lapyme, {
    source: "sales",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "product",
    ],
    measures: [
      "total",
      "units",
      "count",
    ],
    includeTotals: true,
    dateBasis: "commercial",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2QueryV2Report failed:", res.error);
  }
}

run();
```
### Example Usage: sales_example

<!-- UsageSnippet language="typescript" operationID="queryV2Report" method="post" path="/api/v2/reports/query" example="sales_example" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.queryV2Report({
    source: "inventory",
    measures: [],
    dateBasis: "commercial",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2QueryV2Report } from "lapyme/funcs/v2-query-v2-report.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2QueryV2Report(lapyme, {
    source: "inventory",
    measures: [],
    dateBasis: "commercial",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2QueryV2Report failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ReportRequest](../../models/report-request.md)                                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.QueryV2ReportResponse](../../models/operations/query-v2-report-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.V2ErrorEnvelope    | 400, 401, 403             | application/json          |
| errors.V2ErrorEnvelope    | 429                       | application/json          |
| errors.V2ErrorEnvelope    | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |

## getV2PurchaseById

Devuelve el detalle de una compra.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getV2PurchaseById" method="get" path="/api/v2/purchases/{purchaseId}" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.v2.getV2PurchaseById({
    purchaseId: "a27845ad-b9ec-41c7-aae6-679475512bcc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { v2GetV2PurchaseById } from "lapyme/funcs/v2-get-v2-purchase-by-id.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await v2GetV2PurchaseById(lapyme, {
    purchaseId: "a27845ad-b9ec-41c7-aae6-679475512bcc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v2GetV2PurchaseById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2PurchaseByIdRequest](../../models/operations/get-v2-purchase-by-id-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2PurchaseByIdResponse](../../models/operations/get-v2-purchase-by-id-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.V2ErrorEnvelope    | 401, 403, 404             | application/json          |
| errors.V2ErrorEnvelope    | 429                       | application/json          |
| errors.V2ErrorEnvelope    | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |