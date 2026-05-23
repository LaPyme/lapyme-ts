# CreateApiOrderRequest

## Example Usage

```typescript
import { CreateApiOrderRequest } from "lapyme/models/operations";

let value: CreateApiOrderRequest = {
  idempotencyKey: "<value>",
  body: {
    customerId: "3566ddc1-3276-4cea-91a4-6ef40d5cfada",
    assignedWarehouseId: "213b7e3c-c346-4393-84b9-8bae15302e8a",
    totals: {
      subtotal: 952188,
      taxAmount: 313632,
      total: 784735,
    },
    lines: [
      {
        productNameSnapshot: "<value>",
        skuSnapshot: "<value>",
        orderedQuantity: 26171,
        unitPrice: 644469,
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `idempotencyKey`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | Clave estable para deduplicar reintentos de la misma operación.          |
| `body`                                                                   | [models.ApiOrderCreateRequest](../../models/api-order-create-request.md) | :heavy_check_mark:                                                       | N/A                                                                      |