# ApiTagUpdateResponse

## Example Usage

```typescript
import { ApiTagUpdateResponse } from "lapyme/models";

let value: ApiTagUpdateResponse = {
  requestId: "<id>",
  data: {
    tag: {
      object: "tag",
      id: "cb30a291-3737-40d0-a7c8-d2fc3523a4b7",
      scope: "product",
      name: "<value>",
      slug: "<value>",
      color: "blue",
      description: null,
      archivedAt: new Date("2024-02-12T02:06:27.621Z"),
      createdAt: new Date("2025-01-27T15:37:24.175Z"),
      updatedAt: new Date("2024-01-16T01:02:41.753Z"),
    },
  },
  warnings: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiTagUpdateResponseData](../models/api-tag-update-response-data.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `warnings`                                                                   | *any*[]                                                                      | :heavy_check_mark:                                                           | N/A                                                                          |