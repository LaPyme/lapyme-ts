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
  currency: "USD",
  status: "sent",
  convertedSaleId: "d65de93d-63ee-421c-bee1-3240877d1a97",
  reservation: {
    status: "active",
    reservedThroughDate: new Date("2024-02-11"),
  },
  itemsCount: 170622,
  subtotal: 676861,
  taxAmount: 751627,
  discountAmount: 517819,
  total: 650757,
  createdAt: new Date("2026-06-15T19:13:25.906Z"),
  updatedAt: new Date("2025-11-20T06:33:43.083Z"),
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
| `currency`                                                                                    | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
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