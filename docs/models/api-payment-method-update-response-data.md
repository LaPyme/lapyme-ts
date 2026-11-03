# ApiPaymentMethodUpdateResponseData

## Example Usage

```typescript
import { ApiPaymentMethodUpdateResponseData } from "lapyme/models";

let value: ApiPaymentMethodUpdateResponseData = {
  paymentMethod: {
    object: "payment_method",
    id: "bec89f76-dcdd-4231-98ff-28002ad98b02",
    name: "<value>",
    icon: "<value>",
    type: "check",
    bankAccountId: "efa4d747-0133-4532-8cd1-6fb65b7c80a6",
    supplierSourceBankAccountId: "0f8e15b5-476d-474a-ae36-868c2ec2a11a",
    feePercentage: "<value>",
    feeFixed: 239165,
    requiresReference: true,
    visibility: "both",
    isActive: false,
    isDefault: false,
    createdAt: new Date("2025-03-27T04:20:08.690Z"),
    updatedAt: new Date("2025-03-31T00:08:12.997Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethod`                                                              | [models.ApiSharedObjecta2bd01d7eb](../models/api-shared-objecta2bd01d7eb.md) | :heavy_check_mark:                                                           | N/A                                                                          |