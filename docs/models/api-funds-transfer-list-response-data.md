# ApiFundsTransferListResponseData

## Example Usage

```typescript
import { ApiFundsTransferListResponseData } from "lapyme/models";

let value: ApiFundsTransferListResponseData = {
  object: "funds_transfer",
  id: "eca5ae25-5ad4-422b-800b-c8a04dbc2b67",
  source: {
    balanceType: "safe",
    balanceId: "6ec03c4a-bc45-4405-96a4-1335131e6f59",
  },
  destination: {
    balanceType: "register",
    balanceId: "f145f08d-88a1-4eb8-81ec-b1e0ad375774",
  },
  amount: 693055,
  currency: "PES",
  occurredOn: new Date("2024-11-25"),
  reference: "<value>",
  description: null,
  createdAt: new Date("2025-01-21T04:16:45.402Z"),
  updatedAt: new Date("2026-05-10T06:30:40.620Z"),
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