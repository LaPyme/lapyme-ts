# Receipt

## Example Usage

```typescript
import { Receipt } from "lapyme/models";

let value: Receipt = {
  object: "receipt",
  id: "<id>",
  items: [],
  purchaseOrderWarehouseId: null,
  affectedProducts: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | *"receipt"*                                                                    | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `items`                                                                        | [models.ApiSharedObject0440e56bc9](../models/api-shared-object0440e56bc9.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `purchaseOrderWarehouseId`                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `lotWarnings`                                                                  | *models.ApiPurchaseOrderReceiptResponseLotWarning*[]                           | :heavy_minus_sign:                                                             | N/A                                                                            |
| `affectedProducts`                                                             | [models.AffectedProduct](../models/affected-product.md)[]                      | :heavy_check_mark:                                                             | N/A                                                                            |