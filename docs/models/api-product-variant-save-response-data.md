# ApiProductVariantSaveResponseData

## Example Usage

```typescript
import { ApiProductVariantSaveResponseData } from "lapyme/models";

let value: ApiProductVariantSaveResponseData = {
  object: "product_variant_matrix",
  createdCount: 736723,
  idempotentReplay: true,
  costConversions: [],
  variants: [
    {
      id: "73963b63-87ad-4cc8-bad7-6c1f1451828a",
      sku: "<value>",
      optionValues: {},
      metafields: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
    },
  ],
  removed: [
    {
      id: "7d0608f0-e56d-4454-b6fd-69dc53f2007a",
      status: "deleted",
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                | *"product_variant_matrix"*                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `createdCount`                                                                                          | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `idempotentReplay`                                                                                      | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `costConversions`                                                                                       | [models.ApiSharedObjectcbcdbf3dfa](../models/api-shared-objectcbcdbf3dfa.md)[]                          | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `variants`                                                                                              | [models.ApiProductVariantSaveResponseVariant](../models/api-product-variant-save-response-variant.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `removed`                                                                                               | [models.Removed](../models/removed.md)[]                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |