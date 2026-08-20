# ApiSharedObjecte94730814a

## Example Usage

```typescript
import { ApiSharedObjecte94730814a } from "lapyme/models";

let value: ApiSharedObjecte94730814a = {
  object: "order",
  id: "ad6abe23-c21c-498c-a70a-6becddcfa5b3",
  orderNumber: "<value>",
  rawOrderNumber: 406094,
  orderDate: new Date("2025-09-08T03:27:13.253Z"),
  customerId: "4529101a-7c8c-4f58-804f-260034691912",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 727218,
  totalUnits: 489119,
  discountAmount: 781456,
  subtotal: 109604,
  taxAmount: 302097,
  total: 899258,
  currency: "DOL",
  orderStatus: "open",
  preparationStatus: "partially_fulfilled",
  invoicingStatus: "partially_invoiced",
  notes: "<value>",
  createdAt: new Date("2026-05-14T02:50:22.773Z"),
  createdByName: "<value>",
  createdBy: "1dda2822-179c-4302-aa7c-77b0d0fa2a5a",
  lineItems: [
    {
      id: "6f004437-0ebd-49c5-8d3b-b5b8a48aaf36",
      lineNumber: 628925,
      productId: "17c95f95-ee15-4133-bfec-27d775d3684f",
      productName: "<value>",
      sku: "<value>",
      orderedQuantity: 149285,
      allocatedQuantity: 667540,
      fulfilledQuantity: 426293,
      invoicedQuantity: 485968,
      cancelledQuantity: 618109,
      unitPrice: 288629,
      taxRateId: 171216,
      discountAmount: 957932,
      discountPercentage: 2052.72,
      subtotal: 389713,
    },
  ],
  activeWarehouses: [],
  pendingPreparationWarehouseId: "43cd0751-be7b-4143-be28-4a0efe2b64e1",
  preparations: [],
  invoices: [],
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
| `preparations`                                                                                | [models.ApiSharedObject29d35cb5e8](../models/api-shared-object29d35cb5e8.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoices`                                                                                    | [models.ApiSharedObject4fb237ae51](../models/api-shared-object4fb237ae51.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |