# ApiPaymentMethodDetailResponse

## Example Usage

```typescript
import { ApiPaymentMethodDetailResponse } from "lapyme/models";

let value: ApiPaymentMethodDetailResponse = {
  requestId: "<id>",
  data: {
    object: "payment_method",
    id: "97762df2-3408-4f79-9eea-b62850cf60d8",
    name: "<value>",
    icon: null,
    type: "bank_transfer",
    bankAccountId: "a543ada9-6803-4eab-bb56-cde7cdc459cd",
    feePercentage: "<value>",
    feeFixed: 779185,
    requiresReference: true,
    visibility: "sales",
    isActive: false,
    isDefault: false,
    createdAt: new Date("2024-09-28T16:50:14.318Z"),
    updatedAt: new Date("2025-09-12T20:54:03.880Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjectbea6e6be70](../models/api-shared-objectbea6e6be70.md) | :heavy_check_mark:                                                           | N/A                                                                          |