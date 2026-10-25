# CreateApiStockTransferRequest

## Example Usage

```typescript
import { CreateApiStockTransferRequest } from "lapyme/models/operations";

let value: CreateApiStockTransferRequest = {
  body: {
    sourceWarehouseId: "57667fdf-f052-4e11-92a1-9857b3999634",
    targetWarehouseId: "cb086687-dd6e-46b3-8186-678e57618100",
    transferDate: "<value>",
    items: [
      {
        productId: "f4155ec3-7ac0-4044-960b-3cf468634f5d",
        quantity: 796548,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                                                | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | Clave opcional para deduplicar reintentos de la misma creación de transferencia. Si se omite, no hay protección automática contra repeticiones. |
| `xRequestId`                                                                                                                                    | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno.                                                             |
| `body`                                                                                                                                          | [models.ApiStockTransferRequest](../../models/api-stock-transfer-request.md)                                                                    | :heavy_check_mark:                                                                                                                              | N/A                                                                                                                                             |