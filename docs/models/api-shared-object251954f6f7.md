# ApiSharedObject251954f6f7

## Example Usage

```typescript
import { ApiSharedObject251954f6f7 } from "lapyme/models";

let value: ApiSharedObject251954f6f7 = {
  object: "order",
  id: "3b99cb38-8bda-4576-8e72-b82161daa1cb",
  orderNumber: "<value>",
  rawOrderNumber: 189700,
  orderDate: new Date("2024-01-23T19:30:49.961Z"),
  customerId: "034e639d-7177-4853-871c-8a88379c1929",
  customerName: "<value>",
  customerTaxId: null,
  itemsCount: 688592,
  totalUnits: 8669.54,
  discountAmount: 62323,
  subtotal: 435162,
  taxAmount: 923860,
  total: 947205,
  currency: "USD",
  orderStatus: "cancelled",
  preparationStatus: "partially_fulfilled",
  invoicingStatus: "invoiced",
  notes: "<value>",
  createdAt: new Date("2024-06-22T22:01:14.916Z"),
  updatedAt: new Date("2026-02-25T18:59:42.287Z"),
  createdByName: "<value>",
  createdBy: "1cb4cc6d-d5be-428f-9f6d-cc984a6af334",
  lineItems: [
    {
      id: "34e909ec-68c3-4541-acb5-119ac04243bc",
      lineNumber: 241081,
      productId: "9a3998fe-a4a0-4b44-a943-36fea01a3326",
      productName: "<value>",
      sku: "<value>",
      orderedQuantity: 6051.96,
      allocatedQuantity: 9522.23,
      fulfilledQuantity: 4293.57,
      invoicedQuantity: 6180.22,
      cancelledQuantity: 99.76,
      unitPrice: 545812,
      taxRateId: 331362,
      discountAmount: 509268,
      discountPercentage: 2208.38,
      subtotal: 809637,
    },
  ],
  activeWarehouses: [],
  pendingPreparationWarehouseId: "9350dba7-ce10-4809-a1fc-12b27886b253",
  preparationGroups: [],
  preparations: [],
  invoices: [
    {
      object: "order_invoice",
      id: "4515ce32-58f8-4d81-bc71-ebae000a3a08",
      formattedInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      createdAt: new Date("2026-10-22T21:49:47.827Z"),
      invoiceStatus: "issued",
      itemsCount: 246231,
      totalUnits: 7931.91,
      total: 80630,
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
| `currency`                                                                                    | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderStatus`                                                                                 | [models.ApiSharedEnum4ac9200c4a](../models/api-shared-enum4ac9200c4a.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparationStatus`                                                                           | [models.ApiSharedEnumb49e56b125](../models/api-shared-enumb49e56b125.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoicingStatus`                                                                             | [models.ApiSharedEnum2f67ddf0e8](../models/api-shared-enum2f67ddf0e8.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lineItems`                                                                                   | [models.ApiSharedObjectb74541d41a](../models/api-shared-objectb74541d41a.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeWarehouses`                                                                            | [models.ApiSharedObject6e2450633e](../models/api-shared-object6e2450633e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pendingPreparationWarehouseId`                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparationGroups`                                                                           | [models.ApiSharedObjectc8647a846a](../models/api-shared-objectc8647a846a.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparations`                                                                                | [models.ApiSharedObject81e5b4b232](../models/api-shared-object81e5b4b232.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoices`                                                                                    | [models.ApiSharedObjectd4414f57ad](../models/api-shared-objectd4414f57ad.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |