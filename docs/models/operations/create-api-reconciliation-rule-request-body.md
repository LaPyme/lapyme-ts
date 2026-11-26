# CreateApiReconciliationRuleRequestBody

## Example Usage

```typescript
import { CreateApiReconciliationRuleRequestBody } from "lapyme/models/operations";

let value: CreateApiReconciliationRuleRequestBody = {
  bankAccountId: "e38edeb6-54aa-496a-b435-0e2ac7a3f1c7",
  text: "<value>",
  direction: "debit",
  accountId: "03de3892-eb33-4846-bf39-05dcfe9a0cfa",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `bankAccountId`                                                             | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `text`                                                                      | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `direction`                                                                 | [models.ApiSharedEnum1d20f1f7e9](../../models/api-shared-enum1d20f1f7e9.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `accountId`                                                                 | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `contactId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `costCenter1Id`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `costCenter2Id`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `costCenter3Id`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `paused`                                                                    | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |