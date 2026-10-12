# ApiSharedObject50a930638e

## Example Usage

```typescript
import { ApiSharedObject50a930638e } from "lapyme/models";

let value: ApiSharedObject50a930638e = {
  productType: "combo",
  name: "<value>",
  sku: "<value>",
  components: [
    {
      productId: "b7ba9a52-7087-4ba3-9d31-409eb2290ab0",
      quantity: 2900.99,
    },
  ],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `productType`                                                                                                       | *"combo"*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `sku`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `barcode`                                                                                                           | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `imageUrl`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | External product image URL reference. La Pyme displays it best effort and does not copy, ingest, or host the image. |
| `categoryId`                                                                                                        | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `isActive`                                                                                                          | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `pricingMode`                                                                                                       | [models.ApiSharedEnum391cb7d8af](../models/api-shared-enum391cb7d8af.md)                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `price`                                                                                                             | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | Precio manual en centavos; obligatorio en modo manual.                                                              |
| `priceAdjustmentPercentage`                                                                                         | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `components`                                                                                                        | [models.ApiSharedObject0da0631443](../models/api-shared-object0da0631443.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |