# CreateApiProductRequest

## Example Usage

```typescript
import { CreateApiProductRequest } from "lapyme/models/operations";

let value: CreateApiProductRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
    sku: "<value>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | Clave única para evitar duplicados al reintentar la misma creación de producto.     |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiProductMutationRequest](../../models/api-product-mutation-request.md)    | :heavy_check_mark:                                                                  | N/A                                                                                 |