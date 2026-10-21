# ApiStockTransferRequest

## Example Usage

```typescript
import { ApiStockTransferRequest } from "lapyme/models";

let value: ApiStockTransferRequest = {
  sourceWarehouseId: "60e6e1a7-126e-4d86-857e-cdece3ed755b",
  targetWarehouseId: "b9c5240b-493a-4ddd-bdd2-6658f9317c64",
  transferDate: "<value>",
  items: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `sourceWarehouseId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `targetWarehouseId`                                                                  | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `transferDate`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | Fecha ISO (YYYY-MM-DD) u hora ISO 8601 completa.                                     |
| `notes`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `items`                                                                              | [models.ApiStockTransferRequestItem](../models/api-stock-transfer-request-item.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `saveAsDraft`                                                                        | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `markAsReceived`                                                                     | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |