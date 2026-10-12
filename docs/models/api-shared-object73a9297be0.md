# ApiSharedObject73a9297be0

## Example Usage

```typescript
import { ApiSharedObject73a9297be0 } from "lapyme/models";

let value: ApiSharedObject73a9297be0 = {
  object: "payment_method",
  id: "3ef7ba66-a5e5-4f11-bc34-ad4d3fa394d9",
  name: "<value>",
  icon: "<value>",
  type: "cash",
  bankAccountId: "4a46ba71-974b-4d62-b230-9d9b62526d8d",
  feePercentage: "<value>",
  feeFixed: 867510,
  requiresReference: true,
  visibility: "system",
  isActive: true,
  isDefault: false,
  createdAt: new Date("2025-06-12T02:31:01.495Z"),
  updatedAt: new Date("2024-03-01T09:08:00.025Z"),
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