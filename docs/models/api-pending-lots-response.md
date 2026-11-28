# ApiPendingLotsResponse

## Example Usage

```typescript
import { ApiPendingLotsResponse } from "lapyme/models";

let value: ApiPendingLotsResponse = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.ApiPendingLotsResponseData](../models/api-pending-lots-response-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |