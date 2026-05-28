# ApiSharedObject136b444e9e

## Example Usage

```typescript
import { ApiSharedObject136b444e9e } from "lapyme/models";

let value: ApiSharedObject136b444e9e = {
  object: "journal_entry_line",
  id: "65e4bfbd-f30a-42a6-b80b-90b9200089d2",
  account: {
    object: "account",
    id: "1405f938-71ea-4467-8644-fbf5f2cf8a44",
    code: "<value>",
    name: "<value>",
  },
  debit: 940952,
  credit: 308187,
  enteredDebit: 927481,
  enteredCredit: 945170,
  currency: "Kip",
  contact: {
    object: "contact",
    id: "c3575bb6-9682-436e-ba0c-8edfd5668521",
    name: "<value>",
  },
  costCenters: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  description: "hm plus oof mid why handle supposing",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | *"journal_entry_line"*                                                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `account`                                                                    | [models.ApiSharedObject6f6a8f3873](../models/api-shared-object6f6a8f3873.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `debit`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `credit`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `enteredDebit`                                                               | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `enteredCredit`                                                              | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `currency`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `contact`                                                                    | [models.ApiSharedObjectede6d90fef](../models/api-shared-objectede6d90fef.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `costCenters`                                                                | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |