# ApplyApiSaleTagsResponse

## Example Usage

```typescript
import { ApplyApiSaleTagsResponse } from "lapyme/models/operations";

let value: ApplyApiSaleTagsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
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
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headers`                                                              | Record<string, *string*[]>                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `result`                                                               | [models.ApiApplyTagsResponse](../../models/api-apply-tags-response.md) | :heavy_check_mark:                                                     | N/A                                                                    |