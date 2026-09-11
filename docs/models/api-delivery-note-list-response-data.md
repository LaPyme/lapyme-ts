# ApiDeliveryNoteListResponseData

## Example Usage

```typescript
import { ApiDeliveryNoteListResponseData } from "lapyme/models";

let value: ApiDeliveryNoteListResponseData = {
  object: "delivery_note",
  id: "c893d431-700d-49f5-ad3c-1713198c8c16",
  number: "<value>",
  date: new Date("2024-05-27"),
  customer: {
    id: "19e08252-4cae-48ce-af51-86ddbd090f69",
    name: "<value>",
  },
  origin: {
    type: "fulfillment",
    fulfillmentId: "505742ee-c8bf-45f5-a19f-9c828f8be5a7",
  },
  createdAt: new Date("2026-05-07T17:51:59.910Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"delivery_note"*                                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [models.ApiSharedObject738aa6c207](../models/api-shared-object738aa6c207.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `origin`                                                                                      | *models.ApiDeliveryNoteListResponseOrigin*                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |