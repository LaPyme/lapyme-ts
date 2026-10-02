# CreateApiReturnCreditNoteRequestBody

## Example Usage

```typescript
import { CreateApiReturnCreditNoteRequestBody } from "lapyme/models/operations";

let value: CreateApiReturnCreditNoteRequestBody = {
  items: [
    {
      saleItemId: "90f79ad9-81d5-4b05-83f7-e70628e0bdcc",
      quantity: 4283.17,
      unitPrice: 410655,
    },
  ],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                     | [operations.CreateApiReturnCreditNoteItem](../../models/operations/create-api-return-credit-note-item.md)[] | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `paymentDate`                                                                                               | [Date](../../types/rfcdate.md)                                                                              | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `notes`                                                                                                     | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `refundAmountsByMethod`                                                                                     | Record<string, *number*>                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `restockInventory`                                                                                          | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `integrationSource`                                                                                         | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `integrationId`                                                                                             | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `autoInvoicing`                                                                                             | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `skipRefundPayment`                                                                                         | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |
| `operatorId`                                                                                                | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |