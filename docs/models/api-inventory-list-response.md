# ApiInventoryListResponse

## Example Usage

```typescript
import { ApiInventoryListResponse } from "lapyme/models";

let value: ApiInventoryListResponse = {
  requestId: "<id>",
  data: {
    warehouse: {
      object: "warehouse",
      id: "cd37a30d-3ff9-4f85-9f54-b54a8eda05dd",
      name: "<value>",
      address: null,
      isDefault: false,
      isActive: true,
    },
    items: [],
  },
  hasMore: false,
  nextCursor: null,
  object: "list",
  url: "https://well-documented-airbus.biz/",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `requestId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [models.ApiInventoryListResponseData](../models/api-inventory-list-response-data.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `hasMore`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `nextCursor`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `object`                                                                                 | [models.ApiInventoryListResponseObject](../models/api-inventory-list-response-object.md) | :heavy_check_mark:                                                                       | List-envelope discriminator.                                                             |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | Requested list path.                                                                     |