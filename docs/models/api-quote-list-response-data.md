# ApiQuoteListResponseData

## Example Usage

```typescript
import { ApiQuoteListResponseData } from "lapyme/models";

let value: ApiQuoteListResponseData = {
  object: "quote",
  id: "43244f16-128a-410e-b330-1b15e0abb774",
  number: 472599,
  formattedNumber: "<value>",
  customerId: "b72c83ab-4cd9-433d-b163-5351aa9bb204",
  status: "rejected",
  convertedSaleId: "cd65de93-d63e-4e21-9cee-13240877d1a9",
  reservation: {
    status: "active",
    reservedThroughDate: new Date("2025-02-24"),
  },
  itemsCount: 983034,
  subtotal: 170622,
  taxAmount: 676861,
  discountAmount: 751627,
  total: 517819,
  createdAt: new Date("2025-12-14T05:30:42.737Z"),
  updatedAt: new Date("2026-06-15T19:13:25.906Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"quote"*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `formattedNumber`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnumfbc137f7cc](../models/api-shared-enumfbc137f7cc.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `convertedSaleId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reservation`                                                                                 | [models.ApiSharedObjectc82a2ff2d4](../models/api-shared-objectc82a2ff2d4.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `itemsCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subtotal`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discountAmount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |