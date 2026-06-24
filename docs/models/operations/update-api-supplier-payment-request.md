# UpdateApiSupplierPaymentRequest

## Example Usage

```typescript
import { UpdateApiSupplierPaymentRequest } from "lapyme/models/operations";

let value: UpdateApiSupplierPaymentRequest = {
  paymentId: "4a796f36-ac18-42da-94b9-72718af15a96",
  idempotencyKey: "<value>",
  body: {
    supplierId: "6a32794d-84d3-4e74-8ea3-81fe4b7d2d5d",
    pointOfSaleId: "db7cd9ac-f270-468e-99a1-c6e8fe7d5818",
    paymentDate: "<value>",
    currency: "DOL",
    totalAmount: 688567,
    splits: [
      {
        paymentMethodId: "8eb4ec5d-9bf3-4b65-a838-e1aaf4b550a5",
        amount: 122094,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `paymentId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `idempotencyKey`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Clave estable para deduplicar reintentos de la misma operación.                               |
| `body`                                                                                        | [models.ApiSupplierPaymentUpdateRequest](../../models/api-supplier-payment-update-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |