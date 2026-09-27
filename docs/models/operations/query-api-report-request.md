# QueryApiReportRequest


## Supported Types

### `models.ReportRequest`

```typescript
const value: models.ReportRequest = {
  source: "treasury",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [
    "treasury_ending_balance",
  ],
  reportingCurrency: "ARS",
  treasuryCurrencyBasis: "original",
};
```

### `models.AssistantReportRequest`

```typescript
const value: models.AssistantReportRequest = {
  responseMode: "assistant",
  source: "payments",
  measures: [
    "<value 1>",
  ],
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
};
```

