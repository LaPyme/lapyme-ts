# ApiOrderEditRequestLine

## Example Usage

```typescript
import { ApiOrderEditRequestLine } from "lapyme/models";

let value: ApiOrderEditRequestLine = {
  productNameSnapshot: "<value>",
  skuSnapshot: "<value>",
  orderedQuantity: 633140,
  unitPrice: 386472,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `orderLineId`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `productId`              | *string*                 | :heavy_minus_sign:       | N/A                      |
| `productNameSnapshot`    | *string*                 | :heavy_check_mark:       | N/A                      |
| `skuSnapshot`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `variantOptionsSnapshot` | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `optionNamesSnapshot`    | *string*[]               | :heavy_minus_sign:       | N/A                      |
| `orderedQuantity`        | *number*                 | :heavy_check_mark:       | N/A                      |
| `unitPrice`              | *number*                 | :heavy_check_mark:       | N/A                      |
| `taxRateId`              | *number*                 | :heavy_minus_sign:       | N/A                      |
| `discountAmount`         | *number*                 | :heavy_minus_sign:       | N/A                      |
| `discountPercentage`     | *number*                 | :heavy_minus_sign:       | N/A                      |