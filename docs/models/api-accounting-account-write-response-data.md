# ApiAccountingAccountWriteResponseData

## Example Usage

```typescript
import { ApiAccountingAccountWriteResponseData } from "lapyme/models";

let value: ApiAccountingAccountWriteResponseData = {
  object: "account",
  id: "4395a266-4c8a-4577-9c96-8c62ef39ec7a",
  code: null,
  name: "<value>",
  description: "huzzah inasmuch phew airmail but",
  type: "revenue",
  normalBalance: "debit",
  systemRole: "card_pending",
  isActive: true,
  isPostable: false,
  parentId: "de0f569a-c911-483a-a7bd-14e8128ea422",
  incomeStatementCategory: "other_operating_expense",
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