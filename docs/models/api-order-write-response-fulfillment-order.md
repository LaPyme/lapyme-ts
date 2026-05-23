# ApiOrderWriteResponseFulfillmentOrder

## Example Usage

```typescript
import { ApiOrderWriteResponseFulfillmentOrder } from "lapyme/models";

let value: ApiOrderWriteResponseFulfillmentOrder = {
  object: "fulfillment_order",
  id: "f9cf9c17-b4d4-45e2-a6ee-c38b282474e0",
  status: "closed",
  assignedWarehouseId: "e979c921-09f9-44d8-8973-e41895dfe8d6",
  assignedWarehouseName: "<value>",
  deliveryMethod: "shipping",
  requestedAt: new Date("2024-09-09T02:14:21.671Z"),
  startedAt: new Date("2024-10-10T20:23:46.596Z"),
  closedAt: new Date("2025-07-09T23:08:40.950Z"),
  cancelledAt: new Date("2025-01-23T01:23:09.884Z"),
  notes: "<value>",
  lines: [],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `object`                                                                                            | *"fulfillment_order"*                                                                               | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `status`                                                                                            | [models.ApiOrderWriteResponseStatus](../models/api-order-write-response-status.md)                  | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `assignedWarehouseId`                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `assignedWarehouseName`                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `deliveryMethod`                                                                                    | [models.ApiOrderWriteResponseDeliveryMethod](../models/api-order-write-response-delivery-method.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `requestedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `startedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `closedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `cancelledAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `notes`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `lines`                                                                                             | [models.ApiOrderWriteResponseLine](../models/api-order-write-response-line.md)[]                    | :heavy_check_mark:                                                                                  | N/A                                                                                                 |