# ApiAccountLedgerResponse

## Example Usage

```typescript
import { ApiAccountLedgerResponse } from "lapyme/models";

let value: ApiAccountLedgerResponse = {
  requestId: "<id>",
  effectiveScope: "all",
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `effectiveScope`                                                                     | [models.ApiSharedEnum4e8d9d097e](../models/api-shared-enum4e8d9d097e.md)             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.ApiAccountLedgerResponseData](../models/api-account-ledger-response-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |