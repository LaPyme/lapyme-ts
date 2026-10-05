# QueryApiReportResponseBody

Reporte ejecutado exitosamente


## Supported Types

### `models.ReportQueryResponse`

```typescript
const value: models.ReportQueryResponse = {
  requestId: "<id>",
  data: {
    rows: [],
    totals: {},
    metadata: {
      source: "inventory",
      dimensions: [
        "<value 1>",
        "<value 2>",
      ],
      measures: [],
      reportingCurrency: "USD",
      rateBasis: "treasury_functional_ars_accounting_value",
    },
  },
};
```

### `models.AssistantReportResponse`

```typescript
const value: models.AssistantReportResponse = {
  requestId: "<id>",
  data: {
    summary: "<value>",
    report: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    chart: {
      "key": "<value>",
    },
    reporting: {},
  },
};
```

