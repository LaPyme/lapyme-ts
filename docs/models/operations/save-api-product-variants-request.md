# SaveApiProductVariantsRequest

## Example Usage

```typescript
import { SaveApiProductVariantsRequest } from "lapyme/models/operations";

let value: SaveApiProductVariantsRequest = {
  productId: "9012bd26-2927-4ef3-bdef-2006c20aa626",
  idempotencyKey: "<value>",
  body: {},
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `productId`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `idempotencyKey`                                                                        | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `body`                                                                                  | [models.ApiProductVariantSaveRequest](../../models/api-product-variant-save-request.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |