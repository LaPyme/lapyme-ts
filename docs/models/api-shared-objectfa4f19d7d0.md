# ApiSharedObjectfa4f19d7d0

## Example Usage

```typescript
import { ApiSharedObjectfa4f19d7d0 } from "lapyme/models";

let value: ApiSharedObjectfa4f19d7d0 = {
  productType: "combo",
  name: "<value>",
  sku: "<value>",
  components: [
    {
      productId: "755f0362-8ec5-4a4c-8f4d-23e330f62d10",
      quantity: 9523.74,
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