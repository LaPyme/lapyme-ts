# ApiOrderDetailResponseFulfillmentOrder

## Example Usage

```typescript
import { ApiOrderDetailResponseFulfillmentOrder } from "lapyme/models";

let value: ApiOrderDetailResponseFulfillmentOrder = {
  object: "fulfillment_order",
  id: "b7ea1d29-8002-4819-b37b-015cb340982b",
  status: "cancelled",
  assignedWarehouseId: "7bccaf95-a09f-46a4-9664-cdcc2f570747",
  assignedWarehouseName: "<value>",
  deliveryMethod: "shipping",
  requestedAt: new Date("2024-03-15T02:56:11.311Z"),
  startedAt: new Date("2026-06-02T23:45:42.537Z"),
  closedAt: null,
  cancelledAt: new Date("2025-04-06T11:02:57.951Z"),
  notes: "<value>",
  lines: [
    {
      id: "0c29dffe-6368-446d-88da-96a104068642",
      orderLineId: "fb1c641d-fe55-432e-8c28-5c0426da4eac",
      productId: "35862bac-667f-4668-98f7-5f30e70e6b5a",
      productName: "<value>",
      sku: "<value>",
      quantity: 206707,
      fulfilledQuantity: 348583,
      cancelledQuantity: 915506,
    },
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `object`                                                                                              | *"fulfillment_order"*                                                                                 | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `status`                                                                                              | [models.ApiOrderDetailResponseStatus](../models/api-order-detail-response-status.md)                  | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `assignedWarehouseId`                                                                                 | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `assignedWarehouseName`                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `deliveryMethod`                                                                                      | [models.ApiOrderDetailResponseDeliveryMethod](../models/api-order-detail-response-delivery-method.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `requestedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `startedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `closedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `cancelledAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `notes`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `lines`                                                                                               | [models.ApiOrderDetailResponseLine](../models/api-order-detail-response-line.md)[]                    | :heavy_check_mark:                                                                                    | N/A                                                                                                   |