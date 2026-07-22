# ListApiBankAccountsResponse

## Example Usage

```typescript
import { ListApiBankAccountsResponse } from "lapyme/models/operations";

let value: ListApiBankAccountsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        object: "bank_account",
        id: "48b42072-3d66-4da6-a3ff-81c490e7efe8",
        bankName: "<value>",
        accountName: "<value>",
        cbu: "<value>",
        alias: "<value>",
        currency: "PES",
        openingBalance: 985108,
        openingBalanceDate: new Date("2025-05-03"),
        usesCheckbook: true,
        status: "active",
        createdAt: new Date("2024-09-25T08:47:57.209Z"),
        updatedAt: new Date("2025-10-03T21:08:14.366Z"),
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://unripe-gripper.biz/",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `result`                                                                            | [models.ApiBankAccountListResponse](../../models/api-bank-account-list-response.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |