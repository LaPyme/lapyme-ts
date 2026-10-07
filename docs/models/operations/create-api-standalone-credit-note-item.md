# CreateApiStandaloneCreditNoteItem

## Example Usage

```typescript
import { CreateApiStandaloneCreditNoteItem } from "lapyme/models/operations";

let value: CreateApiStandaloneCreditNoteItem = {
  name: "<value>",
  quantity: 9740.77,
  unitPrice: 942374,
  taxRateId: 366840,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `productId`                                                       | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `productName`                                                     | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `productSku`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `productType`                                                     | [operations.ProductType](../../models/operations/product-type.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `quantity`                                                        | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `unitPrice`                                                       | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `taxRateId`                                                       | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `isExempt`                                                        | *boolean*                                                         | :heavy_minus_sign:                                                | N/A                                                               |
| `discountPercentage`                                              | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `accountId`                                                       | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `accountName`                                                     | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `warehouseId`                                                     | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `costCenter1Id`                                                   | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `costCenter2Id`                                                   | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `costCenter3Id`                                                   | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |