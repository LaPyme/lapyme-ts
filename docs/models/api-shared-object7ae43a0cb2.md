# ApiSharedObject7ae43a0cb2

## Example Usage

```typescript
import { ApiSharedObject7ae43a0cb2 } from "lapyme/models";

let value: ApiSharedObject7ae43a0cb2 = {
  object: "order",
  id: "ee672924-b442-49ce-bb11-409b2d10e49a",
  orderNumber: "<value>",
  rawOrderNumber: 270416,
  orderDate: new Date("2026-06-17T05:24:46.650Z"),
  customerId: "ad8b0155-5657-4021-9cd5-5c334932ba29",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 728390,
  totalUnits: 602904,
  discountAmount: 612361,
  subtotal: 63397,
  taxAmount: 900163,
  total: 627469,
  currency: "PES",
  orderStatus: "open",
  preparationStatus: "in_progress",
  invoicingStatus: "partially_invoiced",
  notes: "<value>",
  createdAt: new Date("2024-06-18T22:59:40.978Z"),
  updatedAt: new Date("2024-07-18T17:59:46.804Z"),
  createdByName: "<value>",
  createdBy: "93dabd35-37c6-4db7-8dbb-dc7965ba5e8c",
  lineItems: [],
  activeWarehouses: [
    {
      id: "f701d204-c699-4362-88cf-63c56a0607fc",
      name: "<value>",
      isDefault: false,
    },
  ],
  pendingPreparationWarehouseId: "c293d3f3-5dd5-46fd-bad8-5e71527fd4c2",
  preparationGroups: [],
  preparations: [
    {
      object: "order_preparation",
      id: "c0477b9d-98a7-4a94-9e99-74a0db48c4c4",
      preparedAt: new Date("2024-11-10T05:07:23.155Z"),
      warehouseName: "<value>",
      deliveryMethod: "shipping",
      remitoDeliveryId: "238a9a45-c918-4b3b-987f-cbbe1ae23990",
      formattedRemitoNumber: "<value>",
      lines: [],
    },
  ],
  invoices: [
    {
      object: "order_invoice",
      id: "ca6d42d0-4f3f-4a5b-b323-9525363de7e0",
      formattedInvoiceNumber: "<value>",
      invoiceDate: "<value>",
      createdAt: new Date("2025-01-22T10:27:19.051Z"),
      invoiceStatus: "pending",
      itemsCount: 404020,
      totalUnits: 345302,
      total: 371183,
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
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lineItems`                                                                                   | [models.ApiSharedObject57439fd94e](../models/api-shared-object57439fd94e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeWarehouses`                                                                            | [models.ApiSharedObject6e2450633e](../models/api-shared-object6e2450633e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pendingPreparationWarehouseId`                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparationGroups`                                                                           | [models.ApiSharedObject7c939aea5f](../models/api-shared-object7c939aea5f.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `preparations`                                                                                | [models.ApiSharedObject29d35cb5e8](../models/api-shared-object29d35cb5e8.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoices`                                                                                    | [models.ApiSharedObject4fb237ae51](../models/api-shared-object4fb237ae51.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |