# GetPaymentMethodByIdResponse

## Example Usage

```typescript
import { GetPaymentMethodByIdResponse } from "lapyme/models/operations";

let value: GetPaymentMethodByIdResponse = {
  headers: {},
  result: {
    success: true,
    data: {
      id: "f59f3667-b2b5-46ae-bf23-9ec1374e70fd",
      name: "<value>",
      icon: "<value>",
      feePercentage: "<value>",
      feeFixed: 6454.67,
      requiresReference: false,
      isActive: true,
      isDefault: false,
      createdAt: new Date("2024-12-19T22:10:08.620Z"),
      updatedAt: new Date("2026-10-18T20:41:01.584Z"),
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headers`                                                                                | Record<string, *string*[]>                                                               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `result`                                                                                 | [models.GetPaymentMethodByIdResponse](../../models/get-payment-method-by-id-response.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |