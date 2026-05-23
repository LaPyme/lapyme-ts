# CreateApiPriceListRequest

## Example Usage

```typescript
import { CreateApiPriceListRequest } from "lapyme/models/operations";

let value: CreateApiPriceListRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                        | *string*                                                                                | :heavy_check_mark:                                                                      | Clave única para evitar duplicados al reintentar la misma creación de lista de precios. |
| `xRequestId`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno.     |
| `body`                                                                                  | [models.ApiPriceListMutationRequest](../../models/api-price-list-mutation-request.md)   | :heavy_check_mark:                                                                      | N/A                                                                                     |