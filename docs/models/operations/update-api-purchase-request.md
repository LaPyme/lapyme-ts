# UpdateApiPurchaseRequest

## Example Usage

```typescript
import { UpdateApiPurchaseRequest } from "lapyme/models/operations";

let value: UpdateApiPurchaseRequest = {
  purchaseId: "55c24c7f-e74b-4b82-be03-7ae93edf925c",
  idempotencyKey: "<value>",
  body: {
    installments: [],
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `purchaseId`                                                    | *string*                                                        | :heavy_check_mark:                                              | ID de la compra                                                 |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |
| `body`                                                          | *models.ApiPurchaseUpdateRequestUnion*                          | :heavy_check_mark:                                              | N/A                                                             |