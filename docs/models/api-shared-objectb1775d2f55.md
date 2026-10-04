# ApiSharedObjectb1775d2f55

## Example Usage

```typescript
import { ApiSharedObjectb1775d2f55 } from "lapyme/models";

let value: ApiSharedObjectb1775d2f55 = {
  requestId: "<id>",
  effectiveScope: {
    circuitId: "33d39db2-6c1a-4393-928b-bdb81c8f9e7e",
    circuitName: "<value>",
  },
  data: {
    object: "accounts_payable",
    functionalCurrency: "ARS",
    summary: {
      total: 37077,
      undated: 433268,
      current: 808386,
      overdue: 168530,
    },
    buckets: [],
    isFilteredSubset: false,
    groups: [
      {
        contactId: "0d6f73f7-d7bf-4c30-8e26-8d96e8406fbd",
        contactName: "<value>",
        totalBalance: 281818,
        overdueBalance: 16042,
        documentCount: 219054,
        buckets: [],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `effectiveScope`                                                                                     | *models.ApiSharedObjectb1775d2f55EffectiveScope*                                                     | :heavy_check_mark:                                                                                   | Circuito sobre el que corrió el reporte: `all`, o el circuito pedido (`circuit_id` null es General). |
| `data`                                                                                               | [models.ApiSharedObjectefe736f3c8](../models/api-shared-objectefe736f3c8.md)                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |