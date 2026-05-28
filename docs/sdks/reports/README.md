# Reports

## Overview

### Available Operations

* [query](#query) - Consultar reporte

## query

Ejecuta una consulta analítica agrupada sobre ventas, compras, pagos o inventario. El campo `source` determina qué dimensiones y métricas están disponibles.

### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="default" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.reports.query({
    source: "payments",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [
      "paymentSplitCount",
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
import { reportsQuery } from "lapyme/funcs/reports-query.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await reportsQuery(lapyme, {
    source: "payments",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [
      "paymentSplitCount",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsQuery failed:", res.error);
  }
}

run();
```
### Example Usage: inventory_snapshot

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="inventory_snapshot" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.reports.query({
    source: "inventory",
    dimensions: [
      "product",
      "warehouse",
    ],
    measures: [
      "daysOfInventoryRemaining",
      "endingInventoryUnits",
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
import { reportsQuery } from "lapyme/funcs/reports-query.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await reportsQuery(lapyme, {
    source: "inventory",
    dimensions: [
      "product",
      "warehouse",
    ],
    measures: [
      "daysOfInventoryRemaining",
      "endingInventoryUnits",
    ],
    dateBasis: "commercial",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsQuery failed:", res.error);
  }
}

run();
```
### Example Usage: payments_by_method

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="payments_by_method" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.reports.query({
    source: "payments",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "paymentContactName",
    ],
    measures: [
      "paymentBalance",
      "paymentNetCashflow",
      "avgPaymentAmount",
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
import { reportsQuery } from "lapyme/funcs/reports-query.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await reportsQuery(lapyme, {
    source: "payments",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "paymentContactName",
    ],
    measures: [
      "paymentBalance",
      "paymentNetCashflow",
      "avgPaymentAmount",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsQuery failed:", res.error);
  }
}

run();
```
### Example Usage: purchases_by_supplier

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="purchases_by_supplier" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.reports.query({
    source: "purchases",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "supplier",
    ],
    measures: [
      "uniqueSuppliers",
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
import { reportsQuery } from "lapyme/funcs/reports-query.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await reportsQuery(lapyme, {
    source: "purchases",
    period: {
      startDate: new Date("2026-03-01"),
      endDate: new Date("2026-03-31"),
    },
    dimensions: [
      "supplier",
    ],
    measures: [
      "uniqueSuppliers",
      "purchaseCount",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsQuery failed:", res.error);
  }
}

run();
```
### Example Usage: sales_by_product

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="sales_by_product" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.reports.query({
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
import { reportsQuery } from "lapyme/funcs/reports-query.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await reportsQuery(lapyme, {
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
    console.log("reportsQuery failed:", res.error);
  }
}

run();
```
### Example Usage: sales_example

<!-- UsageSnippet language="typescript" operationID="queryApiReport" method="post" path="/api/v1/reports/query" example="sales_example" -->
```typescript
import { Lapyme } from "lapyme";

const lapyme = new Lapyme({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await lapyme.reports.query({
    source: "purchases",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LapymeCore } from "lapyme/core.js";
import { reportsQuery } from "lapyme/funcs/reports-query.js";

// Use `LapymeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const lapyme = new LapymeCore({
  bearerAuth: process.env["LAPYME_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await reportsQuery(lapyme, {
    source: "purchases",
    period: {
      startDate: new Date("2026-01-01"),
      endDate: new Date("2026-03-31"),
    },
    measures: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reportsQuery failed:", res.error);
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

**Promise\<[operations.QueryApiReportResponse](../../models/operations/query-api-report-response.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ApiErrorEnvelope   | 400, 401, 403             | application/json          |
| errors.ApiErrorEnvelope   | 429                       | application/json          |
| errors.ApiErrorEnvelope   | 500                       | application/json          |
| errors.LapymeDefaultError | 4XX, 5XX                  | \*/\*                     |