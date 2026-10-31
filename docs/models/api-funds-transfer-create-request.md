# ApiFundsTransferCreateRequest

## Example Usage

```typescript
import { ApiFundsTransferCreateRequest } from "lapyme/models";

let value: ApiFundsTransferCreateRequest = {
  source: {
    balanceType: "safe",
    balanceId: "6ec03c4a-bc45-4405-96a4-1335131e6f59",
  },
  destination: {
    balanceType: "register",
    balanceId: "f145f08d-88a1-4eb8-81ec-b1e0ad375774",
  },
  amount: 842914,
  occurredOn: new Date("2025-03-14"),
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `source`                                                                     | [models.ApiSharedObject16a22cc706](../models/api-shared-object16a22cc706.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `destination`                                                                | [models.ApiSharedObject16a22cc706](../models/api-shared-object16a22cc706.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `amount`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `occurredOn`                                                                 | [Date](../types/rfcdate.md)                                                  | :heavy_check_mark:                                                           | N/A                                                                          |
| `reference`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |