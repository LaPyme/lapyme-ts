# CreateApiStockMovementRequest

## Example Usage

```typescript
import { CreateApiStockMovementRequest } from "lapyme/models/operations";

let value: CreateApiStockMovementRequest = {
  idempotencyKey: "<value>",
  body: {
    warehouseId: "b2827f35-ae6b-4f8e-a76a-3ea4504d750f",
    mode: "replace",
    operationDate: new Date("2024-08-02T02:47:42.166Z"),
    reason: "<value>",
    items: [],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | Clave única para evitar duplicados al reintentar el mismo movimiento de stock.      |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiStockMovementRequest](../../models/api-stock-movement-request.md)        | :heavy_check_mark:                                                                  | N/A                                                                                 |