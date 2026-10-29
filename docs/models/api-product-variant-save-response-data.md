# ApiProductVariantSaveResponseData

## Example Usage

```typescript
import { ApiProductVariantSaveResponseData } from "lapyme/models";

let value: ApiProductVariantSaveResponseData = {
  object: "product_variant_matrix",
  createdCount: 736723,
  idempotentReplay: true,
  variants: [],
  removed: [
    {
      id: "73963b63-87ad-4cc8-bad7-6c1f1451828a",
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
| `variants`                                                                                              | [models.ApiProductVariantSaveResponseVariant](../models/api-product-variant-save-response-variant.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `removed`                                                                                               | [models.Removed](../models/removed.md)[]                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |