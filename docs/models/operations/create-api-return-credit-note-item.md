# CreateApiReturnCreditNoteItem

## Example Usage

```typescript
import { CreateApiReturnCreditNoteItem } from "lapyme/models/operations";

let value: CreateApiReturnCreditNoteItem = {
  saleItemId: "bdf13f91-7307-4500-85d8-ae908f018af8",
  quantity: 306.71,
  unitPrice: 204347,
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `saleItemId`         | *string*             | :heavy_check_mark:   | N/A                  |
| `productId`          | *string*             | :heavy_minus_sign:   | N/A                  |
| `warehouseId`        | *string*             | :heavy_minus_sign:   | N/A                  |
| `quantity`           | *number*             | :heavy_check_mark:   | N/A                  |
| `unitPrice`          | *number*             | :heavy_check_mark:   | N/A                  |
| `discountAmount`     | *number*             | :heavy_minus_sign:   | N/A                  |
| `discountPercentage` | *number*             | :heavy_minus_sign:   | N/A                  |
| `subtotal`           | *number*             | :heavy_minus_sign:   | N/A                  |
| `taxAmount`          | *number*             | :heavy_minus_sign:   | N/A                  |
| `total`              | *number*             | :heavy_minus_sign:   | N/A                  |