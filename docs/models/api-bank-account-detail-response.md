# ApiBankAccountDetailResponse

## Example Usage

```typescript
import { ApiBankAccountDetailResponse } from "lapyme/models";

let value: ApiBankAccountDetailResponse = {
  requestId: "<id>",
  data: {
    object: "bank_account",
    id: "8c6a9ff6-cc2f-42eb-a248-5ae1ce495097",
    kind: "credit_card",
    bankName: "<value>",
    accountName: "<value>",
    cbu: "<value>",
    alias: "<value>",
    currency: "USD",
    openingBalance: 307918,
    openingBalanceDate: new Date("2025-05-31"),
    usesCheckbook: true,
    status: "active",
    createdAt: new Date("2025-04-13T22:54:24.408Z"),
    updatedAt: new Date("2024-12-28T05:35:25.012Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjectd862a95f13](../models/api-shared-objectd862a95f13.md) | :heavy_check_mark:                                                           | N/A                                                                          |