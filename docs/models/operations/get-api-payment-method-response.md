# GetApiPaymentMethodResponse

## Example Usage

```typescript
import { GetApiPaymentMethodResponse } from "lapyme/models/operations";

let value: GetApiPaymentMethodResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "payment_method",
      id: "97762df2-3408-4f79-9eea-b62850cf60d8",
      name: "<value>",
      icon: null,
      type: "bank_transfer",
      bankAccountId: "a543ada9-6803-4eab-bb56-cde7cdc459cd",
      supplierSourceBankAccountId: "6c23ac39-1214-4804-a0dd-0dbbbf65f1a3",
      feePercentage: "<value>",
      feeFixed: 639813,
      requiresReference: false,
      visibility: "sales",
      isActive: false,
      isDefault: false,
      createdAt: new Date("2025-03-19T00:52:06.347Z"),
      updatedAt: new Date("2025-04-10T12:55:00.312Z"),
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiPaymentMethodDetailResponse](../../models/api-payment-method-detail-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |