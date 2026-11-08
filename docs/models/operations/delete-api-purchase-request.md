# DeleteApiPurchaseRequest

## Example Usage

```typescript
import { DeleteApiPurchaseRequest } from "lapyme/models/operations";

let value: DeleteApiPurchaseRequest = {
  purchaseId: "4593cdcc-eb0e-4cbd-94e8-7931305d98e9",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `purchaseId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | ID de la compra                                                                                 |
| `undoStock`                                                                                     | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | Si es true, revierte los movimientos de stock directo creados por la compra cuando sea posible. |
| `idempotencyKey`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | Clave estable para deduplicar reintentos de la misma operación.                                 |