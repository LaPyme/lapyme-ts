# CreateApiProductRequest

## Example Usage

```typescript
import { CreateApiProductRequest } from "lapyme/models/operations";

let value: CreateApiProductRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
    visibility: "both",
    isActive: true,
    options: [
      "<value 1>",
      "<value 2>",
    ],
    variants: [],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | Clave única para evitar duplicados al reintentar la misma creación de producto.     |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | *models.ApiProductMutationRequestUnion*                                             | :heavy_check_mark:                                                                  | N/A                                                                                 |