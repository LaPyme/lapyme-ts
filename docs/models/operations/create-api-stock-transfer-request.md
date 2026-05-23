# CreateApiStockTransferRequest

## Example Usage

```typescript
import { CreateApiStockTransferRequest } from "lapyme/models/operations";

let value: CreateApiStockTransferRequest = {
  body: {
    sourceWarehouseId: "57667fdf-f052-4e11-92a1-9857b3999634",
    targetWarehouseId: "cb086687-dd6e-46b3-8186-678e57618100",
    transferDate: new Date("2026-01-30T13:46:21.446Z"),
    items: [
      {
        productId: "4155ec37-ac00-4446-b0b3-cf468634f5d7",
        quantity: 325341,
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