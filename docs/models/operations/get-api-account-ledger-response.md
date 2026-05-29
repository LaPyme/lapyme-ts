# GetApiAccountLedgerResponse

## Example Usage

```typescript
import { GetApiAccountLedgerResponse } from "lapyme/models/operations";

let value: GetApiAccountLedgerResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "account_ledger",
      account: {
        object: "account",
        id: "1405f938-71ea-4467-8644-fbf5f2cf8a44",
        code: "<value>",
        name: "<value>",
      },
      openingBalance: 966549,
      currency: "Somali Shilling",
      lines: [
        {
          object: "account_ledger_line",
          id: "4ecc86fb-66bf-4bdc-a006-a18a50709484",
          date: new Date("2025-10-22"),
          journalEntryId: "8e6d808d-b4df-4c07-845a-c19db0bbea0d",
          accountId: "fa4bcecd-6dec-4349-99b6-f6e80c23029f",
          sourceType: "<value>",
          sourceId: "2f308cfc-1e54-461c-8351-eb1072887541",
          description: "safeguard lest knowingly redact as innovate lumbering",
          reference: "<value>",
          counterpartyName: "<value>",
          contactId: "1e57174d-a5b8-48c2-b146-7d4f778d32da",
          costCenter1Id: null,
          costCenter2Id: "db05d363-f845-4e42-86cb-aac79217c148",
          costCenter3Id: "3e3b3e55-ce7f-4044-94d5-0e7c1e18da8f",
          debit: 18146,
          credit: 501525,
          currency: "Iranian Rial",
          balance: 601287,
        },
      ],
      closingBalance: 368101,
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