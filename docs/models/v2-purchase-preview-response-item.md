# V2PurchasePreviewResponseItem

## Example Usage

```typescript
import { V2PurchasePreviewResponseItem } from "lapyme/models";

let value: V2PurchasePreviewResponseItem = {
  productId: "c4f6beaa-735b-41bc-ac0d-4cd619b3a09e",
  productName: "<value>",
  sku: "<value>",
  name: "<value>",
  quantity: 7285.73,
  unitCost: 48187,
  subtotal: null,
  total: 188842,
  taxRateId: 835634,
  isExempt: false,
  discountPercentage: 6848.91,
  purchaseOrderItemId: "254ca6bc-8874-4a51-bef2-d402713fc726",
  rubroIva: null,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `productId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `productName`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `sku`                                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `quantity`                                                                                      | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `unitCost`                                                                                      | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `subtotal`                                                                                      | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `total`                                                                                         | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `taxRateId`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `isExempt`                                                                                      | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `discountPercentage`                                                                            | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `purchaseOrderItemId`                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `rubroIva`                                                                                      | [models.V2PurchasePreviewResponseRubroIva](../models/v2-purchase-preview-response-rubro-iva.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |