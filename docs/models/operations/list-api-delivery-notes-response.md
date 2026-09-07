# ListApiDeliveryNotesResponse

## Example Usage

```typescript
import { ListApiDeliveryNotesResponse } from "lapyme/models/operations";

let value: ListApiDeliveryNotesResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://sunny-bathrobe.org",
    data: [
      {
        object: "delivery_note",
        id: "e14e483a-906f-4ff4-9c6d-84c49bf72fdd",
        number: "<value>",
        date: new Date("2026-04-10"),
        customer: {
          id: "19e08252-4cae-48ce-af51-86ddbd090f69",
          name: "<value>",
        },
        origin: {
          type: "custom",
        },
        createdAt: new Date("2025-05-14T05:13:06.078Z"),
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