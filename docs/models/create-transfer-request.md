# CreateTransferRequest

## Example Usage

```typescript
import { CreateTransferRequest } from "lapyme/models";

let value: CreateTransferRequest = {
  sourceWarehouseId: "452bfada-ad7f-4795-8c64-2fdbe87fed90",
  targetWarehouseId: "00044efe-446b-4a6c-b666-77172fdb0530",
  transferDate: new Date("2026-01-16T10:42:32.593Z"),
  items: [
    {
      productId: "42757a53-8337-4adf-a6fc-2667b2e50cdc",
      quantity: 69326,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | ID de la ubicación de origen                                                                  |
| `targetWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | ID de la ubicación de destino                                                                 |
| `transferDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Fecha y hora de la transferencia (ISO 8601)                                                   |
| `notes`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Notas adicionales de la transferencia                                                         |
| `items`                                                                                       | [models.CreateTransferRequestItem](../models/create-transfer-request-item.md)[]               | :heavy_check_mark:                                                                            | Productos a transferir                                                                        |