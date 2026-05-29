# ApiAccountingAccount

## Example Usage

```typescript
import { ApiAccountingAccount } from "lapyme/models";

let value: ApiAccountingAccount = {
  object: "account",
  id: "5a11f9c1-037f-4897-a9f2-d57a5e2794b3",
  code: "<value>",
  name: "<value>",
  type: "<value>",
  normalBalance: "credit",
  systemRole: "<value>",
  isActive: true,
  isPostable: false,
  parentId: "5752ef01-9633-444a-a527-60de51d997ad",
  incomeStatementCategory: "<value>",
  isInflationAdjustable: true,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `object`                                            | *"account"*                                         | :heavy_check_mark:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `code`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `name`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `normalBalance`                                     | [models.NormalBalance](../models/normal-balance.md) | :heavy_check_mark:                                  | N/A                                                 |
| `systemRole`                                        | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `isActive`                                          | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 |
| `isPostable`                                        | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 |
| `parentId`                                          | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `incomeStatementCategory`                           | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `isInflationAdjustable`                             | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 |