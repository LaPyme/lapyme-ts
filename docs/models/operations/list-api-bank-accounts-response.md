# ListApiBankAccountsResponse

## Example Usage

```typescript
import { ListApiBankAccountsResponse } from "lapyme/models/operations";

let value: ListApiBankAccountsResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [
      {
        object: "bank_account",
        id: "48b42072-3d66-4da6-a3ff-81c490e7efe8",
        kind: "credit_card",
        bankName: "<value>",
        accountName: "<value>",
        cbu: "<value>",
        alias: "<value>",
        currency: "USD",
        openingBalance: 445631,
        openingBalanceDate: new Date("2024-05-21"),
        usesCheckbook: true,
        status: "active",
        createdAt: new Date("2025-10-03T21:08:14.366Z"),
        updatedAt: new Date("2025-02-26T15:35:18.392Z"),
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://impartial-disposer.org",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `result`                                                                            | [models.ApiBankAccountListResponse](../../models/api-bank-account-list-response.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |