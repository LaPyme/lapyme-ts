# SaveApiProductVariantsResponse

## Example Usage

```typescript
import { SaveApiProductVariantsResponse } from "lapyme/models/operations";

let value: SaveApiProductVariantsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
    },
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [models.ApiProductVariantSaveResponse](../../models/api-product-variant-save-response.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |