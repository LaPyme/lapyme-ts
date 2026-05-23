# ApiPaymentMethodUpdateResponse

## Example Usage

```typescript
import { ApiPaymentMethodUpdateResponse } from "lapyme/models";

let value: ApiPaymentMethodUpdateResponse = {
  requestId: "<id>",
  data: {
    paymentMethod: {
      object: "payment_method",
      id: "bec89f76-dcdd-4231-98ff-28002ad98b02",
      name: "<value>",
      icon: "<value>",
      type: "check",
      bankAccountId: "efa4d747-0133-4532-8cd1-6fb65b7c80a6",
      feePercentage: "<value>",
      feeFixed: null,
      requiresReference: false,
      visibility: "both",
      isActive: false,
      isDefault: true,
      createdAt: new Date("2025-01-10T20:59:02.707Z"),
      updatedAt: new Date("2026-03-06T13:29:21.502Z"),
    },
  },
  warnings: [],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `data`                                                                                            | [models.ApiPaymentMethodUpdateResponseData](../models/api-payment-method-update-response-data.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `warnings`                                                                                        | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |