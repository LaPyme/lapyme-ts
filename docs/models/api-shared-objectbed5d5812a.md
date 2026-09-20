# ApiSharedObjectbed5d5812a

## Example Usage

```typescript
import { ApiSharedObjectbed5d5812a } from "lapyme/models";

let value: ApiSharedObjectbed5d5812a = {
  object: "journal_entry_line",
  id: "3255cfa2-1724-4da7-9e51-ec855b750906",
  account: {
    object: "account",
    id: "1405f938-71ea-4467-8644-fbf5f2cf8a44",
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
    id: "03099c0f-2a12-4035-9281-2c1516fa9358",
    name: "<value>",
  },
  costCenters: {
    "key": "<value>",
    "key1": "<value>",
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