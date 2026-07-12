# GetApiRemitoByIdResponse

## Example Usage

```typescript
import { GetApiRemitoByIdResponse } from "lapyme/models/operations";

let value: GetApiRemitoByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      id: "b74fac62-3b20-4e04-8a73-0afc87ac148d",
      number: "<value>",
      date: new Date("2026-10-27"),
      customer: {
        id: "0dbbaee6-23ac-4765-b8d0-62032f062890",
        name: "<value>",
      },
      origin: {
        type: "fulfillment",
        fulfillmentId: "216e1b4c-2317-4ac1-80c8-3c1d10a2c0d1",
      },
      created: new Date("2025-09-21T23:49:57.646Z"),
      remitoNumber: 930253,
      pointOfSale: {
        id: "3db6ada5-1184-4bd5-a462-3ebede6f3cce",
        number: 894228,
        name: "<value>",
      },
      carrier: "<value>",
      deliveryAddress: "<value>",
      scheduledDate: new Date("2025-10-23"),
      deliveredAt: new Date("2026-10-05T00:26:04.599Z"),
      recipientName: "<value>",
      recipientDni: "<value>",
      driverId: "c1218798-71b2-4984-90d9-f868cb73145e",
      notes: "<value>",
      items: [],
      updated: new Date("2025-04-27T06:40:22.035Z"),
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiRemitoDetailResponse](../../models/api-remito-detail-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |