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
  isCustomsCharge: true,
  customsChargeInTaxableBase: true,
  total: 641572,
  discountPercentage: 4691.09,
  purchaseOrderItemId: null,
  vatCategory: "fixed_assets",
  product: {
    id: "a7198eac-545a-45a2-a30f-54b7c5054e0c",
    sku: null,
    name: "<value>",
    productType: "combo",
  },
  purchaseOrder: {
    id: "fd6d99b5-2caa-43bb-8c5b-ac7477425265",
    formattedOrderNumber: "<value>",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `quantity`                                                                                                                  | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `unitCost`                                                                                                                  | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `subtotal`                                                                                                                  | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `taxRateId`                                                                                                                 | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `isExempt`                                                                                                                  | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `isCustomsCharge`                                                                                                           | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | El renglon es un cargo aduanero de un despacho.                                                                             |
| `customsChargeInTaxableBase`                                                                                                | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | El cargo aduanero integra la base imponible del IVA. Envialo de nuevo al reemplazar los renglones con PUT para conservarlo. |
| `total`                                                                                                                     | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `discountPercentage`                                                                                                        | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `purchaseOrderItemId`                                                                                                       | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `vatCategory`                                                                                                               | [models.ApiSharedEnum822a963f55](../models/api-shared-enum822a963f55.md)                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `product`                                                                                                                   | [models.Product](../models/product.md)                                                                                      | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `purchaseOrder`                                                                                                             | [models.ApiPurchaseDetailPurchaseOrder](../models/api-purchase-detail-purchase-order.md)                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |