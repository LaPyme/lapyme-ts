# ApiSharedObject308596969e

## Example Usage

```typescript
import { ApiSharedObject308596969e } from "lapyme/models";

let value: ApiSharedObject308596969e = {
  object: "account_ledger_line",
  id: "ed36d42f-5d47-416e-ae67-a781d7f15509",
  date: new Date("2026-03-15"),
  journalEntryId: "bc931849-86a5-4985-a56c-485852a23f04",
  circuitId: "402d6725-b137-46e8-9ac8-ec4ee33fc5f5",
  accountId: "b874e138-8198-460e-9c1e-dc32fd50c502",
  sourceType: "<value>",
  sourceId: "3ae0e265-c134-4fce-b35d-e3a5f2557f97",
  description: "till gut rewarding glisten with scheme knowingly",
  reference: "<value>",
  counterpartyName: "<value>",
  contactId: "affa3513-c993-4276-ab0c-c1b3f63a17b6",
  costCenter1Id: "e2c852d3-648d-4ce7-8540-fcdd06b23c26",
  costCenter2Id: "282ad771-ce1f-4321-a6af-0a251574494e",
  costCenter3Id: "0ef8a322-278c-4efe-9411-e3013eb8d3d2",
  debit: 652446,
  credit: 433928,
  currency: "Lilangeni",
  balance: 509176,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `object`                                                    | *"account_ledger_line"*                                     | :heavy_check_mark:                                          | N/A                                                         |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `date`                                                      | [Date](../types/rfcdate.md)                                 | :heavy_check_mark:                                          | N/A                                                         |
| `journalEntryId`                                            | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `circuitId`                                                 | *string*                                                    | :heavy_check_mark:                                          | Circuito contable del asiento. null es el circuito General. |
| `accountId`                                                 | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `sourceType`                                                | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `sourceId`                                                  | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `description`                                               | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `reference`                                                 | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `counterpartyName`                                          | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `contactId`                                                 | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `costCenter1Id`                                             | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `costCenter2Id`                                             | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `costCenter3Id`                                             | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `debit`                                                     | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `credit`                                                    | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `currency`                                                  | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `balance`                                                   | *number*                                                    | :heavy_check_mark:                                          | N/A                                                         |