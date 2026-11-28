# ApiSharedObject2aee0301c8

## Example Usage

```typescript
import { ApiSharedObject2aee0301c8 } from "lapyme/models";

let value: ApiSharedObject2aee0301c8 = {
  requestId: "<id>",
  effectiveScope: {
    circuitId: "8abec0cb-e3f6-4226-94ca-2340e2f84285",
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
| `effectiveScope`                                                                                     | *models.ApiSharedObject2aee0301c8EffectiveScope*                                                     | :heavy_check_mark:                                                                                   | Circuito sobre el que corrió el reporte: `all`, o el circuito pedido (`circuit_id` null es General). |
| `data`                                                                                               | [models.ApiSharedObject238d1473c1](../models/api-shared-object238d1473c1.md)                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |