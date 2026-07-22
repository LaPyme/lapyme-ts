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
    id: "cfaf19d9-6936-4a38-a1b1-04c188dceb2d",
    sku: "<value>",
    name: "<value>",
    productType: "product",
  },
  purchaseOrder: {
    id: "fa73eef2-2e9d-414f-a84d-18f683cead94",
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