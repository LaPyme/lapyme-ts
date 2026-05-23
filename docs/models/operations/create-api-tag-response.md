# CreateApiTagResponse

## Example Usage

```typescript
import { CreateApiTagResponse } from "lapyme/models/operations";

let value: CreateApiTagResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
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
      idempotentReplay: true,
    },
    warnings: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [models.ApiTagCreateResponse](../../models/api-tag-create-response.md) | :heavy_check_mark:                                                     | N/A                                                                    |