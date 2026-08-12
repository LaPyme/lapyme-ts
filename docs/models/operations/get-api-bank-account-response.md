# GetApiBankAccountResponse

## Example Usage

```typescript
import { GetApiBankAccountResponse } from "lapyme/models/operations";

let value: GetApiBankAccountResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "bank_account",
      id: "8c6a9ff6-cc2f-42eb-a248-5ae1ce495097",
      bankName: "<value>",
      accountName: "<value>",
      cbu: "<value>",
      alias: "<value>",
      currency: "PES",
      openingBalance: 756782,
      openingBalanceDate: new Date("2024-12-03"),
      usesCheckbook: true,
      status: "active",
      createdAt: new Date("2024-04-24T04:15:31.083Z"),
      updatedAt: new Date("2025-04-13T22:54:24.408Z"),
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `result`                                                                                | [models.ApiBankAccountDetailResponse](../../models/api-bank-account-detail-response.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |