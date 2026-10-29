# ApiProductVariantSaveResponse

## Example Usage

```typescript
import { ApiProductVariantSaveResponse } from "lapyme/models";

let value: ApiProductVariantSaveResponse = {
  requestId: "<id>",
  data: {
    object: "product_variant_matrix",
    createdCount: 383882,
    idempotentReplay: true,
    variants: [],
    removed: [
      {
        id: "73963b63-87ad-4cc8-bad7-6c1f1451828a",
        status: "deleted",
      },
    ],
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `requestId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `data`                                                                                          | [models.ApiProductVariantSaveResponseData](../models/api-product-variant-save-response-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |