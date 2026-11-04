# VoidApiSettlementResponse

## Example Usage

```typescript
import { VoidApiSettlementResponse } from "lapyme/models/operations";

let value: VoidApiSettlementResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "settlement",
      id: "862f489e-3213-45f5-b097-9a8dcf1b38c5",
      bankAccountId: "c8bc3c0b-60c0-46be-bb0a-8af88c308b77",
      settlementDate: new Date("2025-02-05"),
      status: "<value>",
      grossAmount: 994812,
      deductionsAmount: 559044,
      netAmount: 483830,
      createdAt: new Date("2024-10-11T02:59:42.562Z"),
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `result`                                                                        | [models.ApiSharedObjecta9a56f8ba3](../../models/api-shared-objecta9a56f8ba3.md) | :heavy_check_mark:                                                              | N/A                                                                             |