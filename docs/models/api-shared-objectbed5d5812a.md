# ApiSharedObjectbed5d5812a

## Example Usage

```typescript
import { ApiSharedObjectbed5d5812a } from "lapyme/models";

let value: ApiSharedObjectbed5d5812a = {
  object: "journal_entry_line",
  id: "3255cfa2-1724-4da7-9e51-ec855b750906",
  account: {
    object: "account",
    id: "405f9387-1ea4-4676-a44f-bf5f2cf8a440",
    code: "<value>",
    name: "<value>",
  },
  debit: 814362,
  credit: 512686,
  enteredDebit: 959545,
  enteredCredit: 474472,
  currency: "Metical",
  contact: {
    object: "contact",
    id: "c01ff2a5-287f-4db8-afbe-fd9b837ca82d",
    name: "<value>",
  },
  costCenters: {
    "key": "<value>",
  },
  description: null,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | *"journal_entry_line"*                                                       | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `account`                                                                    | [models.ApiSharedObject18d478a65b](../models/api-shared-object18d478a65b.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `debit`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `credit`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `enteredDebit`                                                               | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `enteredCredit`                                                              | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `currency`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `contact`                                                                    | [models.ApiSharedObject4529837fc2](../models/api-shared-object4529837fc2.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `costCenters`                                                                | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |