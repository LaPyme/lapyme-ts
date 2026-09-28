# ApiSharedObject14842af4a0

## Example Usage

```typescript
import { ApiSharedObject14842af4a0 } from "lapyme/models";

let value: ApiSharedObject14842af4a0 = {
  object: "order",
  id: "7489310c-df28-4ee8-8284-187db5ba4e6b",
  orderNumber: "<value>",
  rawOrderNumber: 475853,
  orderDate: new Date("2025-01-04T09:52:31.861Z"),
  customerId: "0b89ecd5-3dc0-4df9-b130-fc945f2ad087",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 220537,
  totalUnits: 750320,
  discountAmount: 537881,
  subtotal: 11668,
  taxAmount: 470529,
  total: 755088,
  currency: "USD",
  orderStatus: "completed",
  preparationStatus: "unfulfilled",
  invoicingStatus: "pending",
  notes: "<value>",
  createdAt: new Date("2024-01-11T02:15:14.674Z"),
  updatedAt: new Date("2026-05-30T03:55:30.813Z"),
  createdByName: "<value>",
  createdBy: "6a7aae41-dcca-48d1-9238-b5e1c46a43f4",
  lineItems: [
    {
      id: "34e909ec-68c3-4541-acb5-119ac04243bc",
      lineNumber: 241081,
      productId: "9a3998fe-a4a0-4b44-a943-36fea01a3326",
      productName: "<value>",
      sku: "<value>",
      orderedQuantity: 605196,
      allocatedQuantity: 952223,
      fulfilledQuantity: 429357,
      invoicedQuantity: 618022,
      cancelledQuantity: 9976,
      unitPrice: 545812,
      taxRateId: 331362,
      discountAmount: 509268,
      discountPercentage: 2208.38,
      subtotal: 809637,
    },
  ],
  activeWarehouses: [],
  pendingPreparationWarehouseId: "5cda61d6-1c67-434f-a313-8a25fd80e5e3",
  preparationGroups: [
    {
      id: "9a745089-ddd5-4575-b6ff-2494d9d9a409",
      status: "cancelled",
      warehouseId: "f5228807-6441-4e3a-bca3-969a519bfd32",
      warehouseName: "<value>",
      deliveryMethod: "local_delivery",
      requestedAt: new Date("2025-05-01T15:45:45.663Z"),
      startedAt: new Date("2024-11-20T01:44:19.535Z"),
      closedAt: null,
      cancelledAt: new Date("2024-03-19T21:33:09.502Z"),
      notes: "<value>",
      lines: [],
    },
  ],
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
| `currency`                                                                                    | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderStatus`                                                                                 | [models.ApiSharedEnum4ac9200c4a](../models/api-shared-enum4ac9200c4a.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparationStatus`                                                                           | [models.ApiSharedEnumb49e56b125](../models/api-shared-enumb49e56b125.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoicingStatus`                                                                             | [models.ApiSharedEnum2f67ddf0e8](../models/api-shared-enum2f67ddf0e8.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lineItems`                                                                                   | [models.ApiSharedObjectad0bd3d383](../models/api-shared-objectad0bd3d383.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeWarehouses`                                                                            | [models.ApiSharedObject6e2450633e](../models/api-shared-object6e2450633e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pendingPreparationWarehouseId`                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparationGroups`                                                                           | [models.ApiSharedObject024b1713ed](../models/api-shared-object024b1713ed.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparations`                                                                                | [models.ApiSharedObject061bc982d2](../models/api-shared-object061bc982d2.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoices`                                                                                    | [models.ApiSharedObjectbd54051c77](../models/api-shared-objectbd54051c77.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |