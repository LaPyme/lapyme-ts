# ApiPurchaseDetailResponseItem

## Example Usage

```typescript
import { ApiPurchaseDetailResponseItem } from "lapyme/models";

let value: ApiPurchaseDetailResponseItem = {
  id: "dcd4d0d5-dda0-4c1e-b7fd-00353271d7ea",
  name: "<value>",
  quantity: 212.32,
  unitCost: 462716,
  subtotal: 782723,
  taxRateId: 744511,
  isExempt: true,
  total: 228423,
  discountPercentage: 3220.81,
  purchaseOrderItemId: null,
  vatCategory: "fixed_assets",
  product: {
    id: "baa50ef9-3144-447c-8046-7ed9a72c4875",
    sku: "<value>",
    name: "<value>",
    productType: "product",
  },
  purchaseOrder: {
    id: "451f1aff-4ff0-494e-bc56-8411ffc7f278",
    formattedOrderNumber: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `quantity`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `unitCost`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `subtotal`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `taxRateId`                                                                                                    | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `isExempt`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `total`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `discountPercentage`                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `purchaseOrderItemId`                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `vatCategory`                                                                                                  | [models.ApiPurchaseDetailResponseItemVatCategory](../models/api-purchase-detail-response-item-vat-category.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `product`                                                                                                      | [models.ApiPurchaseDetailResponseProduct](../models/api-purchase-detail-response-product.md)                   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `purchaseOrder`                                                                                                | [models.ApiPurchaseDetailResponsePurchaseOrder](../models/api-purchase-detail-response-purchase-order.md)      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |