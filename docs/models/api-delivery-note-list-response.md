# ApiDeliveryNoteListResponse

## Example Usage

```typescript
import { ApiDeliveryNoteListResponse } from "lapyme/models";

let value: ApiDeliveryNoteListResponse = {
  requestId: "<id>",
  object: "list",
  url: "https://golden-whack.biz/",
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
  nextCursor: null,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `object`                                                                                      | *"list"*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [models.ApiDeliveryNoteListResponseData](../models/api-delivery-note-list-response-data.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hasMore`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nextCursor`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |