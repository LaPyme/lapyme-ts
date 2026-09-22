# ApiSharedObjectd743309336

## Example Usage

```typescript
import { ApiSharedObjectd743309336 } from "lapyme/models";

let value: ApiSharedObjectd743309336 = {
  productType: "combo",
  name: "<value>",
  sku: "<value>",
  components: [
    {
      productId: "a1921163-772f-4c9d-a7cf-ac93b0f2f6c9",
      quantity: 9929.54,
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
| `components`                                                                                                        | [models.ApiSharedObject2fe28f5f6e](../models/api-shared-object2fe28f5f6e.md)[]                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |