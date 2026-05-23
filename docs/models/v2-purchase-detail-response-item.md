# V2PurchaseDetailResponseItem

## Example Usage

```typescript
import { V2PurchaseDetailResponseItem } from "lapyme/models";

let value: V2PurchaseDetailResponseItem = {
  id: "4775f44a-05fb-4454-898b-6254af8011a3",
  name: "<value>",
  quantity: 9634.65,
  unitCost: 633508,
  subtotal: 245612,
  taxRateId: 832886,
  isExempt: null,
  total: 656067,
  discountPercentage: null,
  purchaseOrderItemId: "559f5a60-beb1-4ac3-980e-9b41a747d198",
  rubroIva: "servicios",
  product: {
    id: "97eec961-72f7-45ff-aee5-405760104275",
    sku: "<value>",
    name: null,
    productType: "combo",
  },
  purchaseOrder: {
    id: "5429734a-964a-4a62-90aa-c6b6daef9e91",
    formattedOrderNumber: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `quantity`                                                                                             | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `unitCost`                                                                                             | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `subtotal`                                                                                             | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `taxRateId`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `isExempt`                                                                                             | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `total`                                                                                                | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `discountPercentage`                                                                                   | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `purchaseOrderItemId`                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `rubroIva`                                                                                             | [models.V2PurchaseDetailResponseItemRubroIva](../models/v2-purchase-detail-response-item-rubro-iva.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `product`                                                                                              | [models.V2PurchaseDetailResponseProduct](../models/v2-purchase-detail-response-product.md)             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `purchaseOrder`                                                                                        | [models.PurchaseOrder](../models/purchase-order.md)                                                    | :heavy_check_mark:                                                                                     | N/A                                                                                                    |