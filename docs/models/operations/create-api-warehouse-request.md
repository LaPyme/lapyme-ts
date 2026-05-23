# CreateApiWarehouseRequest

## Example Usage

```typescript
import { CreateApiWarehouseRequest } from "lapyme/models/operations";

let value: CreateApiWarehouseRequest = {
  idempotencyKey: "<value>",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `idempotencyKey`                                                                     | *string*                                                                             | :heavy_check_mark:                                                                   | Clave única para evitar duplicados al reintentar la misma creación de depósito.      |
| `xRequestId`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno.  |
| `body`                                                                               | [models.ApiWarehouseMutationRequest](../../models/api-warehouse-mutation-request.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |