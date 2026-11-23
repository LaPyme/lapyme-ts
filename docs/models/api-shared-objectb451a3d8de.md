# ApiSharedObjectb451a3d8de

## Example Usage

```typescript
import { ApiSharedObjectb451a3d8de } from "lapyme/models";

let value: ApiSharedObjectb451a3d8de = {
  willReceiveProducts: false,
  willCreateReceipt: false,
  willIncreaseDirectStock: false,
  willReturnProducts: false,
  willDecreaseDirectStock: true,
  inventoryEffect: "none",
  warehouseId: "6ebdeb8b-9b7d-4812-bf94-a04dac541974",
  productLineCount: 104709,
  totalQuantity: 727.97,
  purchaseOrderIds: [
    "69b6fc1b-8545-4d1d-9ca7-89215199407b",
    "e45cebcd-5f68-492c-8a5b-86b5777b7347",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `willReceiveProducts`                                                    | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `willCreateReceipt`                                                      | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `willIncreaseDirectStock`                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `willReturnProducts`                                                     | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `willDecreaseDirectStock`                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `inventoryEffect`                                                        | [models.ApiSharedEnumde48b709b2](../models/api-shared-enumde48b709b2.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `warehouseId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `productLineCount`                                                       | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `totalQuantity`                                                          | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `purchaseOrderIds`                                                       | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |