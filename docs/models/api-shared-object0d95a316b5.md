# ApiSharedObject0d95a316b5

## Example Usage

```typescript
import { ApiSharedObject0d95a316b5 } from "lapyme/models";

let value: ApiSharedObject0d95a316b5 = {
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject0b2fa2e51f](../models/api-shared-object0b2fa2e51f.md) | :heavy_check_mark:                                                           | N/A                                                                          |