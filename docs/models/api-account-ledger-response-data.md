# ApiAccountLedgerResponseData

## Example Usage

```typescript
import { ApiAccountLedgerResponseData } from "lapyme/models";

let value: ApiAccountLedgerResponseData = {
  object: "account_ledger",
  account: {
    object: "account",
    id: "405f9387-1ea4-4676-a44f-bf5f2cf8a440",
    code: "<value>",
    name: "<value>",
  },
  openingBalance: 295716,
  currency: "Australian Dollar",
  lines: [
    {
      object: "account_ledger_line",
      id: "79bdb663-fc20-4031-89f5-5e6bdecfe952",
      date: new Date("2025-04-23"),
      journalEntryId: "99d69b74-04f4-4e68-90f1-72cc231e2635",
      accountId: "073cd0d8-7afd-44ba-8b7a-aa4ae1b8e60f",
      sourceType: "<value>",
      sourceId: null,
      description: "instead coolly entwine",
      reference: "<value>",
      counterpartyName: "<value>",
      contactId: "25401d93-27b3-47e9-940f-b17a1bfe687f",
      costCenter1Id: "eefb1849-15d5-42d3-b0bc-5b6cc50f2331",
      costCenter2Id: "0afb80ec-622a-4b18-9324-e99507543768",
      costCenter3Id: "de747f0c-fedd-45c0-b20a-09ff557b1944",
      debit: 845893,
      credit: 538256,
      currency: "Tanzanian Shilling",
      balance: 490401,
    },
  ],
  closingBalance: 625073,
  hasMore: true,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | *"account_ledger"*                                                             | :heavy_check_mark:                                                             | N/A                                                                            |
| `account`                                                                      | [models.ApiSharedObject18d478a65b](../models/api-shared-object18d478a65b.md)   | :heavy_check_mark:                                                             | N/A                                                                            |
| `openingBalance`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `currency`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `lines`                                                                        | [models.ApiSharedObject92531b640f](../models/api-shared-object92531b640f.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `closingBalance`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |