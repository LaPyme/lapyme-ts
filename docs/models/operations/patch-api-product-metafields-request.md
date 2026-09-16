# PatchApiProductMetafieldsRequest

## Example Usage

```typescript
import { PatchApiProductMetafieldsRequest } from "lapyme/models/operations";

let value: PatchApiProductMetafieldsRequest = {
  productId: "3dd3ae79-b682-403c-9a7d-3fd4b1c0d317",
  body: {
    entries: [
      {
        key: "<key>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `body`                                                                                        | [models.ApiProductMetafieldPatchRequest](../../models/api-product-metafield-patch-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |