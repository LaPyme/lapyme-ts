# ApiSharedObject711786f766

## Example Usage

```typescript
import { ApiSharedObject711786f766 } from "lapyme/models";

let value: ApiSharedObject711786f766 = {
  object: "order",
  id: "af75ab00-27ac-4e09-9086-084b89cddf9f",
  orderNumber: "<value>",
  rawOrderNumber: 421680,
  orderDate: new Date("2026-06-12T01:17:25.481Z"),
  customerId: "14e3e012-e527-4765-9323-2d1e2a5a768e",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 276195,
  totalUnits: 283170,
  discountAmount: 81492,
  subtotal: 586127,
  taxAmount: 495841,
  total: 491035,
  currency: "DOL",
  orderStatus: "open",
  preparationStatus: "cancelled",
  invoicingStatus: "pending",
  notes: "<value>",
  createdAt: new Date("2026-08-28T08:27:16.329Z"),
  createdByName: "<value>",
  createdBy: "3edef0d2-b13f-4657-9a1b-66103da85dd2",
  lineItems: [],
  activeWarehouses: [],
  pendingPreparationWarehouseId: "4a38acdc-7a68-4066-9365-a999cff70348",
  preparationGroups: [],
  preparations: [],
  invoices: [
    {
      object: "order_invoice",
      id: "676fb5f3-03ab-4cd6-83ab-b65cfc553258",
      formattedInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      createdAt: new Date("2024-09-01T07:51:52.005Z"),
      invoiceStatus: "pending",
      itemsCount: 828293,
      totalUnits: 190029,
      total: 808166,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"order"*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderNumber`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rawOrderNumber`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerTaxId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `itemsCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalUnits`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discountAmount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subtotal`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `total`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [models.ApiSharedEnum6cfb146157](../models/api-shared-enum6cfb146157.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderStatus`                                                                                 | [models.ApiSharedEnum4ac9200c4a](../models/api-shared-enum4ac9200c4a.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparationStatus`                                                                           | [models.ApiSharedEnumb49e56b125](../models/api-shared-enumb49e56b125.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoicingStatus`                                                                             | [models.ApiSharedEnum2f67ddf0e8](../models/api-shared-enum2f67ddf0e8.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lineItems`                                                                                   | [models.ApiSharedObject57439fd94e](../models/api-shared-object57439fd94e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeWarehouses`                                                                            | [models.ApiSharedObject6e2450633e](../models/api-shared-object6e2450633e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pendingPreparationWarehouseId`                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparationGroups`                                                                           | [models.ApiSharedObject7c939aea5f](../models/api-shared-object7c939aea5f.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparations`                                                                                | [models.ApiSharedObject29d35cb5e8](../models/api-shared-object29d35cb5e8.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoices`                                                                                    | [models.ApiSharedObject4fb237ae51](../models/api-shared-object4fb237ae51.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |