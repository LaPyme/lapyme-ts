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
    costConversions: [],
    variants: [
      {
        id: "73963b63-87ad-4cc8-bad7-6c1f1451828a",
        sku: "<value>",
        optionValues: {},
      },
    ],
    removed: [
      {
        id: "d7d0608f-0e56-4d45-a46f-d69dc53f2007",
        status: "archived",
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