# DeleteApiProductRequest

## Example Usage

```typescript
import { DeleteApiProductRequest } from "lapyme/models/operations";

let value: DeleteApiProductRequest = {
  productId: "86e4654b-991b-4c04-8fa7-8b44ac1325d9",
  idempotencyKey: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `productId`                                                     | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `idempotencyKey`                                                | *string*                                                        | :heavy_check_mark:                                              | Clave estable para deduplicar reintentos de la misma operación. |