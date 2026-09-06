# ApiSharedObject5785340ece

## Example Usage

```typescript
import { ApiSharedObject5785340ece } from "lapyme/models";

let value: ApiSharedObject5785340ece = {
  object: "journal_entry_line",
  id: "b62c7a96-2df9-424a-bef4-c9e72b66c112",
  account: {
    object: "account",
    id: "1405f938-71ea-4467-8644-fbf5f2cf8a44",
    code: "<value>",
    name: "<value>",
  },
  debit: 62250,
  credit: 897639,
  enteredDebit: 400803,
  enteredCredit: 169556,
  currency: "Moroccan Dirham",
  contact: {
    object: "contact",
    id: "0fe93b3f-7306-4f11-a90c-b27bde286070",
    name: "<value>",
  },
  costCenters: {
    "key": "<value>",
    "key1": "<value>",
  },
  description: "record lasting boo foolishly adrenalin stint pfft beneath",
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