# ApiTagCreateResponseData

## Example Usage

```typescript
import { ApiTagCreateResponseData } from "lapyme/models";

let value: ApiTagCreateResponseData = {
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
  idempotentReplay: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `tag`                                                                        | [models.ApiSharedObject0c53a4e5c2](../models/api-shared-object0c53a4e5c2.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |