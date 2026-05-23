# ApiPurchaseOrderReceiptResponseProduct

## Example Usage

```typescript
import { ApiPurchaseOrderReceiptResponseProduct } from "lapyme/models";

let value: ApiPurchaseOrderReceiptResponseProduct = {
  id: "e35598f3-5892-470b-8528-8c2ae1f2945b",
  name: "<value>",
  sku: "<value>",
  productType: "kit",
  variantOptions: {
    "key": "<value>",
  },
  optionNames: [],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sku`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `productType`                                                                                                      | [models.ApiPurchaseOrderReceiptResponseProductType](../models/api-purchase-order-receipt-response-product-type.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `variantOptions`                                                                                                   | Record<string, *string*>                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `optionNames`                                                                                                      | *string*[]                                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |