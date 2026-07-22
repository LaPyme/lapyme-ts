# ApiAccountingAccountCreateRequest

## Example Usage

```typescript
import { ApiAccountingAccountCreateRequest } from "lapyme/models";

let value: ApiAccountingAccountCreateRequest = {
  name: "<value>",
  type: "liability",
  parentId: "6b46762f-fac2-4f6f-84f1-c031a5fe2b84",
  isPostable: false,
  isActive: true,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `code`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `type`                                                                   | [models.ApiSharedEnum5433445ffc](../models/api-shared-enum5433445ffc.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `parentId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `isPostable`                                                             | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `isActive`                                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `incomeStatementCategory`                                                | [models.ApiSharedEnuma6084829bf](../models/api-shared-enuma6084829bf.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `systemRole`                                                             | [models.ApiSharedEnum87e38e3147](../models/api-shared-enum87e38e3147.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `isInflationAdjustable`                                                  | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |