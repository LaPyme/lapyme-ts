# ApiOrderFulfillmentOrdersResponse

## Example Usage

```typescript
import { ApiOrderFulfillmentOrdersResponse } from "lapyme/models";

let value: ApiOrderFulfillmentOrdersResponse = {
  requestId: "<id>",
  data: [
    {
      object: "fulfillment_order",
      id: "fe19aa38-ae61-4347-9d55-ba8f12d380e9",
      status: "in_progress",
      assignedWarehouseId: "3529aab5-a633-4bd5-8d1d-ae1bd33cc918",
      assignedWarehouseName: "<value>",
      deliveryMethod: "shipping",
      requestedAt: new Date("2024-01-09T23:14:03.480Z"),
      startedAt: new Date("2025-07-15T20:50:57.657Z"),
      closedAt: new Date("2026-12-03T12:08:35.161Z"),
      cancelledAt: new Date("2025-12-27T05:42:57.426Z"),
      notes: null,
      lines: [],
    },
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `data`                                                                                                    | [models.ApiOrderFulfillmentOrdersResponseData](../models/api-order-fulfillment-orders-response-data.md)[] | :heavy_check_mark:                                                                                        | N/A                                                                                                       |