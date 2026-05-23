# CreateApiSupplierPaymentRequest

## Example Usage

```typescript
import { CreateApiSupplierPaymentRequest } from "lapyme/models/operations";

let value: CreateApiSupplierPaymentRequest = {
  idempotencyKey: "<value>",
  body: {
    supplierId: "36e50f34-a572-4206-9c81-3130747388ac",
    pointOfSaleId: "f08db476-5bd0-408f-964b-6c2842951f86",
    paymentDate: "<value>",
    currency: "DOL",
    totalAmount: 839457,
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
| `body`                                                                                        | [models.ApiSupplierPaymentCreateRequest](../../models/api-supplier-payment-create-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |