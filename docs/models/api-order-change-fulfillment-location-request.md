# ApiOrderChangeFulfillmentLocationRequest

## Example Usage

```typescript
import { ApiOrderChangeFulfillmentLocationRequest } from "lapyme/models";

let value: ApiOrderChangeFulfillmentLocationRequest = {
  warehouseId: "177a1c42-3579-4b70-9934-f8836e5a204a",
  items: [
    {
      orderLineId: "7fbfa604-20a1-4340-ab18-9d493d4b63d8",
      quantity: 549234,
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `warehouseId`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `items`                                                                                                                  | [models.ApiOrderChangeFulfillmentLocationRequestItem](../models/api-order-change-fulfillment-location-request-item.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |