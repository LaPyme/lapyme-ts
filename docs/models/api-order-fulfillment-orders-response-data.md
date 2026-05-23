# ApiOrderFulfillmentOrdersResponseData

## Example Usage

```typescript
import { ApiOrderFulfillmentOrdersResponseData } from "lapyme/models";

let value: ApiOrderFulfillmentOrdersResponseData = {
  object: "fulfillment_order",
  id: "88f7345a-fbc0-41a6-b0eb-bf423a104ca5",
  status: "in_progress",
  assignedWarehouseId: "07b2e620-af02-443f-9005-4c4523594805",
  assignedWarehouseName: null,
  deliveryMethod: "local_delivery",
  requestedAt: new Date("2024-06-13T07:10:59.375Z"),
  startedAt: new Date("2025-05-09T00:54:36.968Z"),
  closedAt: new Date("2024-05-16T07:05:13.235Z"),
  cancelledAt: new Date("2025-02-26T01:34:26.056Z"),
  notes: "<value>",
  lines: [
    {
      id: "ae57e985-7fef-4f8c-bf64-83c6dfdf4a90",
      orderLineId: "7f3713e8-d8b0-43ae-9727-027488b19e90",
      productId: "f736ad1d-180c-4ed1-84f8-d169a55bd61a",
      productName: "<value>",
      sku: "<value>",
      quantity: 123640,
      fulfilledQuantity: 340865,
      cancelledQuantity: 416049,
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                                     | *"fulfillment_order"*                                                                                                        | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `status`                                                                                                                     | [models.ApiOrderFulfillmentOrdersResponseStatus](../models/api-order-fulfillment-orders-response-status.md)                  | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `assignedWarehouseId`                                                                                                        | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `assignedWarehouseName`                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `deliveryMethod`                                                                                                             | [models.ApiOrderFulfillmentOrdersResponseDeliveryMethod](../models/api-order-fulfillment-orders-response-delivery-method.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `requestedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `startedAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `closedAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `cancelledAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `notes`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `lines`                                                                                                                      | [models.ApiOrderFulfillmentOrdersResponseLine](../models/api-order-fulfillment-orders-response-line.md)[]                    | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |