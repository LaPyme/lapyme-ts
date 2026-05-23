# CreateApiTagRequest

## Example Usage

```typescript
import { CreateApiTagRequest } from "lapyme/models/operations";

let value: CreateApiTagRequest = {
  idempotencyKey: "<value>",
  body: {
    scope: "product",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | Clave única para evitar duplicados al reintentar la misma creación de etiqueta.     |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiTagCreateRequest](../../models/api-tag-create-request.md)                | :heavy_check_mark:                                                                  | N/A                                                                                 |