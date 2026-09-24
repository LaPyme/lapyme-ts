# GetApiAccountLedgerResponse

## Example Usage

```typescript
import { GetApiAccountLedgerResponse } from "lapyme/models/operations";

let value: GetApiAccountLedgerResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    effectiveScope: "principal",
    data: {
      object: "account_ledger",
      account: {
        object: "account",
        id: "405f9387-1ea4-4676-a44f-bf5f2cf8a440",
        code: "<value>",
        name: "<value>",
      },
      openingBalance: 783465,
      currency: "Hryvnia",
      lines: [],
      closingBalance: 909377,
      hasMore: false,
      nextCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiAccountLedgerResponse](../../models/api-account-ledger-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |