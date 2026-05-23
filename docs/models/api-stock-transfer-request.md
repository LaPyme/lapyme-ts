# ApiStockTransferRequest

## Example Usage

```typescript
import { ApiStockTransferRequest } from "lapyme/models";

let value: ApiStockTransferRequest = {
  sourceWarehouseId: "60e6e1a7-126e-4d86-857e-cdece3ed755b",
  targetWarehouseId: "b9c5240b-493a-4ddd-bdd2-6658f9317c64",
  transferDate: new Date("2024-01-31T10:49:37.678Z"),
  items: [
    {
      productId: "4155ec37-ac00-4446-b0b3-cf468634f5d7",
      quantity: 325341,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetWarehouseId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `transferDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiStockTransferRequestItem](../models/api-stock-transfer-request-item.md)[]          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `saveAsDraft`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `markAsReceived`                                                                              | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |