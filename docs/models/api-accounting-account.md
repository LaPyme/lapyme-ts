# ApiAccountingAccount

## Example Usage

```typescript
import { ApiAccountingAccount } from "lapyme/models";

let value: ApiAccountingAccount = {
  object: "account",
  id: "5a11f9c1-037f-4897-a9f2-d57a5e2794b3",
  code: "<value>",
  name: "<value>",
  description: "even for gah upbeat extra-large",
  type: "liability",
  normalBalance: "credit",
  systemRole: "taxes_expense",
  isActive: true,
  isPostable: false,
  parentId: "6bbb6d49-d5f2-419f-a993-b77b21553a43",
  incomeStatementCategory: "cogs",
  isInflationAdjustable: false,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `object`                                                                 | *"account"*                                                              | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `code`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | [models.ApiSharedEnum5433445ffc](../models/api-shared-enum5433445ffc.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `normalBalance`                                                          | [models.ApiSharedEnum1d20f1f7e9](../models/api-shared-enum1d20f1f7e9.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `systemRole`                                                             | [models.ApiSharedEnum87e38e3147](../models/api-shared-enum87e38e3147.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `isActive`                                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `isPostable`                                                             | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `parentId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `incomeStatementCategory`                                                | [models.ApiSharedEnuma6084829bf](../models/api-shared-enuma6084829bf.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `isInflationAdjustable`                                                  | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |