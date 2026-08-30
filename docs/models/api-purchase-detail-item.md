# ApiPurchaseDetailItem

## Example Usage

```typescript
import { ApiPurchaseDetailItem } from "lapyme/models";

let value: ApiPurchaseDetailItem = {
  id: "403be44e-cfde-4968-a27f-8758a561552a",
  name: "<value>",
  quantity: 6018.46,
  unitCost: 422914,
  subtotal: 382607,
  taxRateId: 470599,
  isExempt: false,
  total: null,
  discountPercentage: null,
  purchaseOrderItemId: "a97045f8-138d-4d34-8dbc-fd671b88edce",
  vatCategory: "services",
  product: {
    id: "936a381b-104c-4188-8dce-b2d9e260cfa7",
    sku: "<value>",
    name: "<value>",
    productType: "product",
  },
  purchaseOrder: {
    id: "e9d14f84-d18f-4683-9cea-d94a7198eac5",
    formattedOrderNumber: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `quantity`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `unitCost`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `subtotal`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `taxRateId`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `isExempt`                                                                               | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `total`                                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `discountPercentage`                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `purchaseOrderItemId`                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `vatCategory`                                                                            | [models.ApiSharedEnum822a963f55](../models/api-shared-enum822a963f55.md)                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `product`                                                                                | [models.Product](../models/product.md)                                                   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `purchaseOrder`                                                                          | [models.ApiPurchaseDetailPurchaseOrder](../models/api-purchase-detail-purchase-order.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |