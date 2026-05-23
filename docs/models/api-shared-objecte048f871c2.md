# ApiSharedObjecte048f871c2

## Example Usage

```typescript
import { ApiSharedObjecte048f871c2 } from "lapyme/models";

let value: ApiSharedObjecte048f871c2 = {
  id: "0eadf450-ffe1-4971-a7d1-fa370143428d",
  name: "<value>",
  quantity: 8461.1,
  unitCost: 93144,
  subtotal: 961735,
  taxRateId: null,
  isExempt: false,
  total: 191506,
  discountPercentage: 9546.48,
  purchaseOrderItemId: "8da2ae63-0406-4bcd-8b22-8ccf5fd4fd20",
  vatCategory: null,
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `quantity`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `unitCost`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `subtotal`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `taxRateId`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `isExempt`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `total`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `discountPercentage`                                                         | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `purchaseOrderItemId`                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `vatCategory`                                                                | [models.ApiSharedEnum822a963f55](../models/api-shared-enum822a963f55.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `product`                                                                    | [models.ApiSharedObjectc87fbdcf3b](../models/api-shared-objectc87fbdcf3b.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `purchaseOrder`                                                              | [models.ApiSharedObjecta2ee8aef0f](../models/api-shared-objecta2ee8aef0f.md) | :heavy_check_mark:                                                           | N/A                                                                          |