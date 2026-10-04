# GetApiAccountsReceivableResponse

## Example Usage

```typescript
import { GetApiAccountsReceivableResponse } from "lapyme/models/operations";

let value: GetApiAccountsReceivableResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `result`                                                                        | [models.ApiSharedObjectb1775d2f55](../../models/api-shared-objectb1775d2f55.md) | :heavy_check_mark:                                                              | N/A                                                                             |