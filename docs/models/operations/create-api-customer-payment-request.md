# CreateApiCustomerPaymentRequest

## Example Usage

```typescript
import { CreateApiCustomerPaymentRequest } from "lapyme/models/operations";

let value: CreateApiCustomerPaymentRequest = {
  idempotencyKey: "<value>",
  body: {
    customerId: "136f6b7d-6805-4769-9119-f77fc3196b99",
    pointOfSaleId: "f2ea5da3-f197-4ce2-b676-3cf2dc4f99f5",
    paymentDate: "<value>",
    currency: "DOL",
    totalAmount: 432488,
    splits: [
      {
        paymentMethodId: "054e9f37-01f0-47c8-9a76-e799960b0187",
        amount: 489271,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `body`                                                                                        | [models.ApiCustomerPaymentCreateRequest](../../models/api-customer-payment-create-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |