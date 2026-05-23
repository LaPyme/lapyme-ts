# ApiOrderDetailResponseData

## Example Usage

```typescript
import { ApiOrderDetailResponseData } from "lapyme/models";

let value: ApiOrderDetailResponseData = {
  object: "order",
  id: "a6dd3750-cbca-4f67-ac4e-8c802313af9a",
  orderNumber: "<value>",
  rawOrderNumber: 632076,
  orderDate: new Date("2026-04-14T21:12:47.462Z"),
  customerId: "61f97022-1822-48ba-8ac8-7e3d2b689a96",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 219252,
  totalUnits: 123181,
  discountAmount: 120408,
  subtotal: 851879,
  taxAmount: 962653,
  total: 303924,
  currency: "PES",
  orderStatus: "completed",
  fulfillmentStatus: "partially_fulfilled",
  invoicingStatus: "invoiced",
  notes: "<value>",
  createdAt: new Date("2025-01-28T05:24:40.307Z"),
  createdByName: "<value>",
  createdBy: "6a808078-dbc2-41b3-b7e2-4603e3e57836",
  lineItems: [],
  activeWarehouses: [
    {
      id: "34e909ec-68c3-4541-acb5-119ac04243bc",
      name: "<value>",
      isDefault: true,
    },
  ],
  pendingFulfillmentLocationId: "e4a18e63-967a-4521-ade4-fa25bc13def2",
  fulfillmentOrders: [
    {
      object: "fulfillment_order",
      id: "f6908528-73ce-4abd-91b3-5d7ead30af7c",
      status: "closed",
      assignedWarehouseId: "0f724554-1971-489a-b745-089ddd55756f",
      assignedWarehouseName: "<value>",
      deliveryMethod: "shipping",
      requestedAt: new Date("2025-09-10T11:50:07.932Z"),
      startedAt: new Date("2026-06-29T05:35:21.598Z"),
      closedAt: new Date("2026-07-09T21:43:10.411Z"),
      cancelledAt: new Date("2025-12-20T12:23:22.646Z"),
      notes: "<value>",
      lines: [],
    },
  ],
  fulfillments: [
    "<value 1>",
    "<value 2>",
  ],
  generatedInvoices: [],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                    | *"order"*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `orderNumber`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `rawOrderNumber`                                                                                            | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `orderDate`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `customerId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `customerName`                                                                                              | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `customerTaxId`                                                                                             | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `itemsCount`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `totalUnits`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `discountAmount`                                                                                            | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `subtotal`                                                                                                  | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `taxAmount`                                                                                                 | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `total`                                                                                                     | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `currency`                                                                                                  | [models.ApiOrderDetailResponseCurrency](../models/api-order-detail-response-currency.md)                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `orderStatus`                                                                                               | [models.ApiOrderDetailResponseOrderStatus](../models/api-order-detail-response-order-status.md)             | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `fulfillmentStatus`                                                                                         | [models.ApiOrderDetailResponseFulfillmentStatus](../models/api-order-detail-response-fulfillment-status.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `invoicingStatus`                                                                                           | [models.ApiOrderDetailResponseInvoicingStatus](../models/api-order-detail-response-invoicing-status.md)     | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `notes`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdByName`                                                                                             | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdBy`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `lineItems`                                                                                                 | [models.ApiOrderDetailResponseLineItem](../models/api-order-detail-response-line-item.md)[]                 | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `activeWarehouses`                                                                                          | [models.ApiOrderDetailResponseActiveWarehouse](../models/api-order-detail-response-active-warehouse.md)[]   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `pendingFulfillmentLocationId`                                                                              | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `fulfillmentOrders`                                                                                         | [models.ApiOrderDetailResponseFulfillmentOrder](../models/api-order-detail-response-fulfillment-order.md)[] | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `fulfillments`                                                                                              | *any*[]                                                                                                     | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `generatedInvoices`                                                                                         | *any*[]                                                                                                     | :heavy_check_mark:                                                                                          | N/A                                                                                                         |