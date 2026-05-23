# CreatePaymentMethodResponse

## Example Usage

```typescript
import { CreatePaymentMethodResponse } from "lapyme/models";

let value: CreatePaymentMethodResponse = {
  success: true,
  data: {
    id: "ea5b5919-5e14-448d-ac71-5d0b910e68cb",
    name: "<value>",
    icon: "<value>",
    feePercentage: "<value>",
    feeFixed: 2396.33,
    requiresReference: true,
    isActive: true,
    isDefault: true,
    createdAt: new Date("2026-12-08T13:59:36.222Z"),
    updatedAt: new Date("2025-01-29T11:34:51.787Z"),
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `success`                                                                                  | *true*                                                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [models.CreatePaymentMethodResponseData](../models/create-payment-method-response-data.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |