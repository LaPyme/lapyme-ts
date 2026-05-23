# ApiOrderCreateRequestLine

## Example Usage

```typescript
import { ApiOrderCreateRequestLine } from "lapyme/models";

let value: ApiOrderCreateRequestLine = {
  productNameSnapshot: "<value>",
  skuSnapshot: "<value>",
  orderedQuantity: 992447,
  unitPrice: 47372,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `productId`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `productNameSnapshot` | *string*              | :heavy_check_mark:    | N/A                   |
| `skuSnapshot`         | *string*              | :heavy_check_mark:    | N/A                   |
| `orderedQuantity`     | *number*              | :heavy_check_mark:    | N/A                   |
| `unitPrice`           | *number*              | :heavy_check_mark:    | N/A                   |
| `taxRateId`           | *number*              | :heavy_minus_sign:    | N/A                   |
| `discountAmount`      | *number*              | :heavy_minus_sign:    | N/A                   |
| `discountPercentage`  | *number*              | :heavy_minus_sign:    | N/A                   |