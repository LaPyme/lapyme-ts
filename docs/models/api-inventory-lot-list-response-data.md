# ApiInventoryLotListResponseData

## Example Usage

```typescript
import { ApiInventoryLotListResponseData } from "lapyme/models";

let value: ApiInventoryLotListResponseData = {
  object: "inventory_lot",
  id: "03f7b390-1335-4739-9d31-e4742e781b36",
  productId: "2038e777-c6f5-41fb-a76d-f3213edb410e",
  kind: "serial",
  code: "<value>",
  expirationDate: new Date("2025-01-30"),
  customsDate: new Date("2024-08-25"),
  createdAt: new Date("2024-12-14T05:48:08.033Z"),
  updatedAt: new Date("2026-03-28T16:23:08.414Z"),
  productName: "<value>",
  variantName: "<value>",
  inStock: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"inventory_lot"*                                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `kind`                                                                                        | [models.ApiSharedEnum0f8e04f38d](../models/api-shared-enum0f8e04f38d.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expirationDate`                                                                              | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customsDate`                                                                                 | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unitCost`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `variantName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inStock`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |