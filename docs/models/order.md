# Order

## Example Usage

```typescript
import { Order } from "lapyme/models";

let value: Order = {
  object: "order",
  id: "a5917dc6-d4c1-4905-8966-40204be078eb",
  orderNumber: "<value>",
  rawOrderNumber: 757918,
  orderDate: new Date("2025-12-13T00:14:13.021Z"),
  customerId: "5272264d-30fd-4648-a1be-5305284dcf2a",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 155796,
  totalUnits: 123836,
  discountAmount: 783864,
  subtotal: 777504,
  taxAmount: 51198,
  total: 259838,
  currency: "PES",
  orderStatus: "cancelled",
  fulfillmentStatus: "unfulfilled",
  invoicingStatus: "pending",
  notes: "<value>",
  createdAt: new Date("2024-10-24T01:17:54.926Z"),
  createdByName: "<value>",
  createdBy: "b6d9929b-63a6-4a6f-acff-31780e2ee411",
  lineItems: [
    {
      id: "01ac6f2c-64d3-40bb-bd85-2246c7b6071e",
      lineNumber: 863915,
      productId: "791d2cb8-b512-4291-b505-608c13cc9c4d",
      productName: "<value>",
      sku: "<value>",
      orderedQuantity: 968205,
      allocatedQuantity: 609680,
      fulfilledQuantity: 356287,
      invoicedQuantity: 665331,
      cancelledQuantity: 535483,
      unitPrice: 944750,
      taxRateId: 854621,
      discountAmount: 922421,
      discountPercentage: 2279.57,
      subtotal: 663458,
    },
  ],
  activeWarehouses: [
    {
      id: "599a37bd-618f-413e-8a6e-35a385ab7b36",
      name: "<value>",
      isDefault: false,
    },
  ],
  pendingFulfillmentLocationId: "a4a66a21-878c-4993-8232-5e138cb4dcbe",
  fulfillmentOrders: [],
  fulfillments: [
    "<value 1>",
  ],
  generatedInvoices: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                  | *"order"*                                                                                                 | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `orderNumber`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `rawOrderNumber`                                                                                          | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `orderDate`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `customerId`                                                                                              | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `customerName`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `customerTaxId`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `itemsCount`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `totalUnits`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `discountAmount`                                                                                          | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `subtotal`                                                                                                | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `taxAmount`                                                                                               | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `total`                                                                                                   | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `currency`                                                                                                | [models.ApiOrderWriteResponseCurrency](../models/api-order-write-response-currency.md)                    | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `orderStatus`                                                                                             | [models.ApiOrderWriteResponseOrderStatus](../models/api-order-write-response-order-status.md)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `fulfillmentStatus`                                                                                       | [models.ApiOrderWriteResponseFulfillmentStatus](../models/api-order-write-response-fulfillment-status.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `invoicingStatus`                                                                                         | [models.ApiOrderWriteResponseInvoicingStatus](../models/api-order-write-response-invoicing-status.md)     | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `notes`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdByName`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdBy`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `lineItems`                                                                                               | [models.ApiOrderWriteResponseLineItem](../models/api-order-write-response-line-item.md)[]                 | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `activeWarehouses`                                                                                        | [models.ApiOrderWriteResponseActiveWarehouse](../models/api-order-write-response-active-warehouse.md)[]   | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `pendingFulfillmentLocationId`                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `fulfillmentOrders`                                                                                       | [models.ApiOrderWriteResponseFulfillmentOrder](../models/api-order-write-response-fulfillment-order.md)[] | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `fulfillments`                                                                                            | *any*[]                                                                                                   | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `generatedInvoices`                                                                                       | *any*[]                                                                                                   | :heavy_check_mark:                                                                                        | N/A                                                                                                       |