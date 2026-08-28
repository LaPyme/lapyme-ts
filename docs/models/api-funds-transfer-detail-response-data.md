# ApiFundsTransferDetailResponseData

## Example Usage

```typescript
import { ApiFundsTransferDetailResponseData } from "lapyme/models";

let value: ApiFundsTransferDetailResponseData = {
  object: "funds_transfer",
  id: "8b0d0f38-da89-45c3-8e10-07a3392dd367",
  source: {
    balanceType: "safe",
    balanceId: "6ec03c4a-bc45-4405-96a4-1335131e6f59",
  },
  destination: {
    balanceType: "register",
    balanceId: "f145f08d-88a1-4eb8-81ec-b1e0ad375774",
  },
  amount: 178247,
  currency: "PES",
  occurredOn: new Date("2024-07-09"),
  reference: "<value>",
  description: "gadzooks lightly ugh wonderfully hence vice psst",
  createdAt: new Date("2024-03-11T08:41:31.191Z"),
  updatedAt: new Date("2025-03-22T01:15:32.810Z"),
  accountingEffects: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"funds_transfer"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [models.ApiSharedObject16a22cc706](../models/api-shared-object16a22cc706.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `destination`                                                                                 | [models.ApiSharedObject16a22cc706](../models/api-shared-object16a22cc706.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *"PES"*                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `occurredOn`                                                                                  | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `accountingEffects`                                                                           | *any*[]                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |