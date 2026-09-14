# ApiBankAccountDetailResponse

## Example Usage

```typescript
import { ApiBankAccountDetailResponse } from "lapyme/models";

let value: ApiBankAccountDetailResponse = {
  requestId: "<id>",
  data: {
    object: "bank_account",
    id: "8c6a9ff6-cc2f-42eb-a248-5ae1ce495097",
    bankName: "<value>",
    accountName: "<value>",
    cbu: "<value>",
    alias: "<value>",
    currency: "ARS",
    openingBalance: 756782,
    openingBalanceDate: new Date("2024-12-03"),
    usesCheckbook: true,
    status: "active",
    createdAt: new Date("2024-04-24T04:15:31.083Z"),
    updatedAt: new Date("2025-04-13T22:54:24.408Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObject107feb8347](../models/api-shared-object107feb8347.md) | :heavy_check_mark:                                                           | N/A                                                                          |