# V2PurchaseCommitResponseItem

## Example Usage

```typescript
import { V2PurchaseCommitResponseItem } from "lapyme/models";

let value: V2PurchaseCommitResponseItem = {
  productId: null,
  productName: "<value>",
  sku: "<value>",
  name: null,
  quantity: 5241.86,
  unitCost: 124807,
  subtotal: 498493,
  total: 704242,
  taxRateId: 64884,
  isExempt: false,
  discountPercentage: 5185.13,
  purchaseOrderItemId: "11156dc0-d393-4b96-9133-b82287411e93",
  rubroIva: "bienes",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sku`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unitCost`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subtotal`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxRateId`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isExempt`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discountPercentage`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `purchaseOrderItemId`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rubroIva`                                                                                    | [models.V2PurchaseCommitResponseRubroIva](../models/v2-purchase-commit-response-rubro-iva.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |