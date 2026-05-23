# CreatePaymentMethodResponse

## Example Usage

```typescript
import { CreatePaymentMethodResponse } from "lapyme/models/operations";

let value: CreatePaymentMethodResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [models.CreatePaymentMethodResponse](../../models/create-payment-method-response.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |