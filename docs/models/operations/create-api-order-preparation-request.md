# CreateApiOrderPreparationRequest

## Example Usage

```typescript
import { CreateApiOrderPreparationRequest } from "lapyme/models/operations";

let value: CreateApiOrderPreparationRequest = {
  orderId: "67af65e3-77f7-441c-a1d7-667af1417ade",
  idempotencyKey: "<value>",
  body: {
    items: [],
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `orderId`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | ID del pedido                                                                                   |
| `idempotencyKey`                                                                                | *string*                                                                                        | :heavy_check_mark:                                                                              | Clave estable para deduplicar reintentos de la misma operación.                                 |
| `body`                                                                                          | [models.ApiOrderPreparationCreateRequest](../../models/api-order-preparation-create-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |