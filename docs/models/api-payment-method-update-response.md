# ApiPaymentMethodUpdateResponse

## Example Usage

```typescript
import { ApiPaymentMethodUpdateResponse } from "lapyme/models";

let value: ApiPaymentMethodUpdateResponse = {
  requestId: "<id>",
  data: {
    paymentMethod: {
      object: "payment_method",
      id: "5a7eb1a6-3f0c-404c-9948-c76e68d9773c",
      name: "<value>",
      icon: "<value>",
      type: "check",
      bankAccountId: "63491e9c-aa7c-42d1-80e0-afd5b35872aa",
      feePercentage: "<value>",
      feeFixed: 987977,
      requiresReference: false,
      visibility: "purchases",
      isActive: false,
      isDefault: false,
      createdAt: new Date("2026-05-13T19:17:15.611Z"),
      updatedAt: new Date("2024-06-15T12:10:40.799Z"),
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