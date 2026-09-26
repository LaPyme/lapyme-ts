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
      circuitId: null,
      accountId: "73cd0d87-afd4-4bab-87aa-a4ae1b8e60f3",
      sourceType: null,
      sourceId: null,
      description:
        "adult quietly procurement bludgeon dicker when traditionalism switch so athwart",
      reference: null,
      counterpartyName: "<value>",
      contactId: "5b6cc50f-2331-4f50-8afb-80ec622ab183",
      costCenter1Id: "e9950754-3768-44cd-8e74-7f0cfedd5c02",
      costCenter2Id: "09ff557b-1944-4fd8-ad7a-12a37216e390",
      costCenter3Id: "a974bd0a-8546-44e8-898f-ddc19df33872",
      debit: 606867,
      credit: 640240,
      currency: "South Sudanese pound",
      balance: 437627,
    },
  ],
  closingBalance: 730388,
  hasMore: false,
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
| `lines`                                                                        | [models.ApiSharedObject308596969e](../models/api-shared-object308596969e.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `closingBalance`                                                               | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `hasMore`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `nextCursor`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |