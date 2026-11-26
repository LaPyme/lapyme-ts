# ListApiMembersResponse

## Example Usage

```typescript
import { ListApiMembersResponse } from "lapyme/models/operations";

let value: ListApiMembersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    object: "list",
    url: "/api/v1/members",
    data: [],
    hasMore: false,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.ApiMemberListResponse](../../models/api-member-list-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |