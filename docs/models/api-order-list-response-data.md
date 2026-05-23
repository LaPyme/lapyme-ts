# ApiOrderListResponseData

## Example Usage

```typescript
import { ApiOrderListResponseData } from "lapyme/models";

let value: ApiOrderListResponseData = {
  object: "order",
  id: "04efc829-6f3a-45c8-a0e6-abcb9b4d8557",
  orderNumber: "<value>",
  rawOrderNumber: 857713,
  orderDate: new Date("2026-05-20T06:56:29.962Z"),
  customerId: "5d2ab5dc-4231-4e6e-ac4a-078f38cb0b35",
  customerName: "<value>",
  customerTaxId: "<id>",
  itemsCount: 872326,
  totalUnits: 895135,
  discountAmount: 423307,
  subtotal: 109107,
  taxAmount: 568809,
  total: 383546,
  currency: "PES",
  orderStatus: "completed",
  fulfillmentStatus: "in_progress",
  invoicingStatus: "partially_invoiced",
  notes: "<value>",
  createdAt: new Date("2024-12-27T03:05:35.726Z"),
  createdByName: "<value>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                | *"order"*                                                                                               | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `orderNumber`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `rawOrderNumber`                                                                                        | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `orderDate`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `customerId`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `customerName`                                                                                          | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `customerTaxId`                                                                                         | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `itemsCount`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `totalUnits`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `discountAmount`                                                                                        | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `subtotal`                                                                                              | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `taxAmount`                                                                                             | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `total`                                                                                                 | *number*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `currency`                                                                                              | [models.ApiOrderListResponseCurrency](../models/api-order-list-response-currency.md)                    | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `orderStatus`                                                                                           | [models.ApiOrderListResponseOrderStatus](../models/api-order-list-response-order-status.md)             | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `fulfillmentStatus`                                                                                     | [models.ApiOrderListResponseFulfillmentStatus](../models/api-order-list-response-fulfillment-status.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `invoicingStatus`                                                                                       | [models.ApiOrderListResponseInvoicingStatus](../models/api-order-list-response-invoicing-status.md)     | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `notes`                                                                                                 | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `createdByName`                                                                                         | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |