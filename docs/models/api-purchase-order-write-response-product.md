# ApiPurchaseOrderWriteResponseProduct

## Example Usage

```typescript
import { ApiPurchaseOrderWriteResponseProduct } from "lapyme/models";

let value: ApiPurchaseOrderWriteResponseProduct = {
  id: "2acee55e-8487-4af2-bd19-a5540ca3aaca",
  name: "<value>",
  sku: "<value>",
  productType: null,
  variantOptions: {},
  optionNames: [],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `sku`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `productType`                                                                                                  | [models.ApiPurchaseOrderWriteResponseProductType](../models/api-purchase-order-write-response-product-type.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `variantOptions`                                                                                               | Record<string, *string*>                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `optionNames`                                                                                                  | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |