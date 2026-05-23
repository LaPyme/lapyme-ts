# ApiSharedObject9223e6f740

## Example Usage

```typescript
import { ApiSharedObject9223e6f740 } from "lapyme/models";

let value: ApiSharedObject9223e6f740 = {
  object: "order",
  id: "3ecea20c-c479-4435-b1bb-493108072e59",
  orderNumber: "<value>",
  rawOrderNumber: 823126,
  orderDate: new Date("2025-09-05T20:19:07.915Z"),
  customerId: "53559b36-3131-4167-8a34-4d223f38be7b",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 274981,
  totalUnits: 138258,
  discountAmount: 664427,
  subtotal: 734973,
  taxAmount: 547385,
  total: 991381,
  currency: "PES",
  orderStatus: "cancelled",
  fulfillmentStatus: "unfulfilled",
  invoicingStatus: "pending",
  notes: "<value>",
  createdAt: new Date("2024-06-05T15:04:25.040Z"),
  createdByName: "<value>",
  createdBy: "93f0e187-8017-4530-b193-69d38b3c7625",
  lineItems: [],
  activeWarehouses: [],
  pendingFulfillmentLocationId: "34dbe825-7a3d-4f50-aaf3-9fbaa27433e6",
  fulfillmentOrders: [],
  fulfillments: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  generatedInvoices: [
    "<value 1>",
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
| `fulfillmentStatus`                                                                           | [models.ApiSharedEnumb49e56b125](../models/api-shared-enumb49e56b125.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `invoicingStatus`                                                                             | [models.ApiSharedEnum2f67ddf0e8](../models/api-shared-enum2f67ddf0e8.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdByName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lineItems`                                                                                   | [models.ApiSharedObject57439fd94e](../models/api-shared-object57439fd94e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activeWarehouses`                                                                            | [models.ApiSharedObject6e2450633e](../models/api-shared-object6e2450633e.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pendingFulfillmentLocationId`                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fulfillmentOrders`                                                                           | [models.ApiSharedObject7f109ef840](../models/api-shared-object7f109ef840.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fulfillments`                                                                                | *any*[]                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `generatedInvoices`                                                                           | *any*[]                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |