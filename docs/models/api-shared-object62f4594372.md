# ApiSharedObject62f4594372

## Example Usage

```typescript
import { ApiSharedObject62f4594372 } from "lapyme/models";

let value: ApiSharedObject62f4594372 = {
  object: "order",
  id: "8b077df1-95c9-4888-88bd-18a415b04094",
  orderNumber: "<value>",
  rawOrderNumber: 620304,
  orderDate: new Date("2026-04-12T22:07:30.315Z"),
  customerId: "03227f92-9ff7-46b3-a91d-5cb39fc9abe5",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 933122,
  totalUnits: 435971,
  discountAmount: 97472,
  subtotal: 793157,
  taxAmount: 468013,
  total: 104882,
  currency: "ARS",
  orderStatus: "open",
  preparationStatus: "in_progress",
  invoicingStatus: "invoiced",
  notes: "<value>",
  createdAt: new Date("2025-12-24T23:47:24.036Z"),
  updatedAt: new Date("2026-08-16T09:39:16.915Z"),
  createdByName: "<value>",
  createdBy: "3ea9949b-a07f-4180-ace8-7b0175cbb9e3",
  lineItems: [],
  activeWarehouses: [
    {
      id: "f701d204-c699-4362-88cf-63c56a0607fc",
      name: "<value>",
      isDefault: false,
    },
  ],
  pendingPreparationWarehouseId: "835bf90a-5c9f-47b6-8ef5-9c7bb177373e",
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
  preparations: [
    {
      object: "order_preparation",
      id: "16a40486-8b05-49eb-9627-ecec56ba4963",
      preparedAt: new Date("2026-10-17T19:39:10.101Z"),
      warehouseName: "<value>",
      deliveryMethod: "local_delivery",
      remitoDeliveryId: "a7fee35e-2d80-4485-8bab-99d4592eec61",
      formattedRemitoNumber: "<value>",
      lines: [],
    },
  ],
  invoices: [
    {
      object: "order_invoice",
      id: "97f5b84b-ecd2-44ba-b476-5bd580f3f201",
      formattedInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      createdAt: new Date("2026-05-19T11:58:22.388Z"),
      invoiceStatus: "pending",
      itemsCount: 1548,
      totalUnits: 610313,
      total: 424881,
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
| `lineItems`                                                                                   | [models.ApiSharedObject57439fd94e](../models/api-shared-object57439fd94e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeWarehouses`                                                                            | [models.ApiSharedObject6e2450633e](../models/api-shared-object6e2450633e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pendingPreparationWarehouseId`                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparationGroups`                                                                           | [models.ApiSharedObject7c939aea5f](../models/api-shared-object7c939aea5f.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparations`                                                                                | [models.ApiSharedObject29d35cb5e8](../models/api-shared-object29d35cb5e8.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoices`                                                                                    | [models.ApiSharedObject4fb237ae51](../models/api-shared-object4fb237ae51.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |