# ApiPurchaseTransactionRequestItem

## Example Usage

```typescript
import { ApiPurchaseTransactionRequestItem } from "lapyme/models";

let value: ApiPurchaseTransactionRequestItem = {
  quantity: 9667.39,
  unitCost: 304089,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `productId`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `quantity`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `unitCost`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `subtotal`                                                               | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `total`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `taxRateId`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `isExempt`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `discountPercentage`                                                     | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `purchaseOrderItemId`                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `vatCategory`                                                            | [models.ApiSharedEnum822a963f55](../models/api-shared-enum822a963f55.md) | :heavy_minus_sign:                                                       | N/A                                                                      |