# CreateApiDeliveryNoteResponse

## Example Usage

```typescript
import { CreateApiDeliveryNoteResponse } from "lapyme/models/operations";

let value: CreateApiDeliveryNoteResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "delivery_note",
      id: "3ba2ddca-205f-4f6a-9102-f71a68823c0c",
      number: null,
      date: new Date("2024-01-04"),
      customer: {
        id: "19e08252-4cae-48ce-af51-86ddbd090f69",
        name: "<value>",
      },
      origin: {
        type: "custom",
      },
      createdAt: new Date("2024-05-31T08:22:17.004Z"),
      deliveryNoteNumber: 478119,
      pointOfSale: null,
      carrier: "<value>",
      deliveryAddress: "<value>",
      scheduledDate: new Date("2025-07-09"),
      deliveredAt: new Date("2025-11-03T21:06:27.687Z"),
      recipientName: "<value>",
      recipientDocument: "<value>",
      driverId: "495f5305-0445-488a-81d8-94265bb135a7",
      notes: "<value>",
      items: [],
      updatedAt: new Date("2024-01-06T09:23:09.601Z"),
      idempotentReplay: false,
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `result`                                                                                | [models.ApiDeliveryNoteWriteResponse](../../models/api-delivery-note-write-response.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |