# ReportRequest


## Supported Types

### `models.SalesReportRequest`

```typescript
const value: models.SalesReportRequest = {
  source: "sales",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [],
};
```

### `models.PurchasesReportRequest`

```typescript
const value: models.PurchasesReportRequest = {
  source: "purchases",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [
    "purchaseSubtotal",
  ],
};
```

### `models.InventoryReportRequest`

```typescript
const value: models.InventoryReportRequest = {
  source: "inventory",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [],
};
```

