# ApiRemitoListResponseData

## Example Usage

```typescript
import { ApiRemitoListResponseData } from "lapyme/models";

let value: ApiRemitoListResponseData = {
  id: "65980d77-47f7-4241-a7e3-f9e89a2f467c",
  number: "<value>",
  date: new Date("2026-08-07"),
  customer: {
    id: "0dbbaee6-23ac-4765-b8d0-62032f062890",
    name: "<value>",
  },
  origin: {
    type: "fulfillment",
    fulfillmentId: "58ba8144-dd93-4a21-af8b-c83b4023e89b",
  },
  created: new Date("2024-08-11T20:40:28.119Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"remito"*                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [models.ApiSharedObject7c9936d5e7](../models/api-shared-object7c9936d5e7.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `origin`                                                                                      | *models.ApiRemitoListResponseOrigin*                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |