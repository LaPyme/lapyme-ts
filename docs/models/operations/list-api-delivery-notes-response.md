# ListApiDeliveryNotesResponse

## Example Usage

```typescript
import { ListApiDeliveryNotesResponse } from "lapyme/models/operations";

let value: ListApiDeliveryNotesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://sunny-bathrobe.org",
    data: [
      {
        numberingMode: "managed",
        revision: 92681,
        legalIssuance: {
          id: "e483a906-fff4-4c6d-984c-49bf72fdd6bc",
          talonarioId: "19e08252-4cae-48ce-af51-86ddbd090f69",
          authorizationId: "cb717042-48a8-4d25-b2ad-42f22efd79af",
          number: 949000,
          formattedNumber: "<value>",
          emissionPoint: 208489,
          cai: "<value>",
          expiresOn: new Date("2026-09-28"),
          issuedOn: new Date("2024-08-29"),
          createdAt: new Date("2025-03-27T19:43:20.861Z"),
          createdBy: "0bdfea5f-cffe-481b-8520-0d8e46fd6f93",
          deliveryRevision: 224952,
          voidedAt: new Date("2025-01-30T21:25:14.238Z"),
          voidedBy: "7071c9ba-2a3f-4b89-a5cc-52dcdc803de4",
          voidReason: "<value>",
        },
        object: "delivery_note",
        id: "e330fb1c-d922-4ec8-9309-916e8bc55685",
        number: "<value>",
        date: new Date("2026-05-27"),
        customer: {
          id: "ef11a53d-2ff0-454b-9a6d-7e55c6543057",
          name: null,
        },
        origin: {
          type: "fulfillment",
          fulfillmentId: "731671e1-7f04-496c-b60a-24f577928a1e",
        },
        createdAt: new Date("2025-05-22T21:15:24.264Z"),
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `result`                                                                              | [models.ApiDeliveryNoteListResponse](../../models/api-delivery-note-list-response.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |