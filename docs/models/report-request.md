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
    "purchase_subtotal",
  ],
};
```

### `models.PaymentsReportRequest`

```typescript
const value: models.PaymentsReportRequest = {
  source: "payments",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  dimensions: [
    "contact_metafield:customer_segment",
  ],
  measures: [
    "payment_count",
  ],
};
```

### `models.AppliedCollectionsReportRequest`

```typescript
const value: models.AppliedCollectionsReportRequest = {
  source: "applied_collections",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [
    "applied_collection_net_amount",
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
  dimensions: [
    "product_metafield:season",
  ],
  measures: [],
};
```

### `models.MarketplaceListingsReportRequest`

```typescript
const value: models.MarketplaceListingsReportRequest = {
  source: "marketplace_listings",
  dimensions: [],
  measures: [
    "estimated_contribution_percent",
  ],
};
```

### `models.TreasuryReportRequest`

```typescript
const value: models.TreasuryReportRequest = {
  source: "treasury",
  period: {
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-03-31"),
  },
  measures: [
    "treasury_adjustment_net",
  ],
  treasuryCurrencyBasis: "original",
};
```

