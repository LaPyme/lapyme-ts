# SaveApiProductVariantsResponse

## Example Usage

```typescript
import { SaveApiProductVariantsResponse } from "lapyme/models/operations";

let value: SaveApiProductVariantsResponse = {
  headers: {},
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
        },
      ],
      removed: [
        {
          id: "d7d0608f-0e56-4d45-a46f-d69dc53f2007",
          status: "archived",
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