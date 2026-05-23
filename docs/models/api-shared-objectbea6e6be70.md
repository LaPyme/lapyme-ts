# ApiSharedObjectbea6e6be70

## Example Usage

```typescript
import { ApiSharedObjectbea6e6be70 } from "lapyme/models";

let value: ApiSharedObjectbea6e6be70 = {
  object: "payment_method",
  id: "a85cd241-6a1a-49c2-b06e-1c045e826a2c",
  name: "<value>",
  icon: "<value>",
  type: "card",
  bankAccountId: "90d39f80-ad50-4075-9851-915fa2a4780c",
  feePercentage: "<value>",
  feeFixed: 890801,
  requiresReference: false,
  visibility: "sales",
  isActive: false,
  isDefault: false,
  createdAt: new Date("2026-06-05T19:49:36.430Z"),
  updatedAt: new Date("2024-05-02T01:22:46.767Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"payment_method"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `icon`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [models.ApiSharedEnum377ec234cb](../models/api-shared-enum377ec234cb.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `bankAccountId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `feePercentage`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `feeFixed`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requiresReference`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibility`                                                                                  | [models.ApiSharedEnum73bb779813](../models/api-shared-enum73bb779813.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isDefault`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `installmentPlans`                                                                            | [models.ApiSharedObjectfd1bf60b79](../models/api-shared-objectfd1bf60b79.md)[]                | :heavy_minus_sign:                                                                            | N/A                                                                                           |