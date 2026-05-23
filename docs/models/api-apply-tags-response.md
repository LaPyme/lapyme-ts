# ApiApplyTagsResponse

## Example Usage

```typescript
import { ApiApplyTagsResponse } from "lapyme/models";

let value: ApiApplyTagsResponse = {
  requestId: "<id>",
  data: {
    entityIds: [
      "6d60a80c-a95f-4c92-a1e1-1cb3ae90feb3",
    ],
    added: 346281,
    removed: 419813,
    total: 283326,
  },
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiApplyTagsResponseData](../models/api-apply-tags-response-data.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `warnings`                                                                   | *any*[]                                                                      | :heavy_check_mark:                                                           | N/A                                                                          |