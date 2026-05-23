# ApiPurchaseOrderDetailResponseProduct

## Example Usage

```typescript
import { ApiPurchaseOrderDetailResponseProduct } from "lapyme/models";

let value: ApiPurchaseOrderDetailResponseProduct = {
  id: "ad29966b-2e54-47df-9f4b-287996a0fe86",
  name: "<value>",
  sku: "<value>",
  productType: "service",
  variantOptions: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  optionNames: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sku`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `productType`                                                                                                    | [models.ApiPurchaseOrderDetailResponseProductType](../models/api-purchase-order-detail-response-product-type.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `variantOptions`                                                                                                 | Record<string, *string*>                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `optionNames`                                                                                                    | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |