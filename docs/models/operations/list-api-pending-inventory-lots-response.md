# ListApiPendingInventoryLotsResponse

## Example Usage

```typescript
import { ListApiPendingInventoryLotsResponse } from "lapyme/models/operations";

let value: ListApiPendingInventoryLotsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      outbound: [],
      onHand: [
        {
          productId: "e400fa25-9614-44f5-8f86-00e58f977254",
          productName: "<value>",
          warehouseId: "9d8e1cbe-83ad-4721-98a8-c48d36643d4a",
          quantity: 1124.46,
        },
      ],
      nextOffset: 350967,
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.ApiPendingLotsResponse](../../models/api-pending-lots-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |