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
        paymentMethodId: "011f1218-1a2c-466d-af1f-7e51dae20421",
        amount: 625760,
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