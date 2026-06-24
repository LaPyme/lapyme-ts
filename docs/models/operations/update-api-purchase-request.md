# UpdateApiPurchaseRequest

## Example Usage

```typescript
import { UpdateApiPurchaseRequest } from "lapyme/models/operations";

let value: UpdateApiPurchaseRequest = {
  purchaseId: "55c24c7f-e74b-4b82-be03-7ae93edf925c",
  idempotencyKey: "<value>",
  body: {
    voucherType: 221187,
    items: [],
    currency: "DOL",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `purchaseId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | ID de la compra                                                                |
| `idempotencyKey`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | Clave estable para deduplicar reintentos de la misma operación.                |
| `body`                                                                         | [models.ApiPurchaseUpdateRequest](../../models/api-purchase-update-request.md) | :heavy_check_mark:                                                             | N/A                                                                            |