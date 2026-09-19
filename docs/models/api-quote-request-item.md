# ApiQuoteRequestItem

## Example Usage

```typescript
import { ApiQuoteRequestItem } from "lapyme/models";

let value: ApiQuoteRequestItem = {
  productId: "490f0708-e903-4b6f-b4ff-82da08b10192",
  quantity: 894430,
  unitPrice: 463174,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `productId`        | *string*           | :heavy_check_mark: | N/A                |
| `warehouseId`      | *string*           | :heavy_minus_sign: | N/A                |
| `quantity`         | *number*           | :heavy_check_mark: | N/A                |
| `unitPrice`        | *number*           | :heavy_check_mark: | N/A                |
| `discount`         | *models.Discount*  | :heavy_minus_sign: | N/A                |