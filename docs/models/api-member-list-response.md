# ApiMemberListResponse

## Example Usage

```typescript
import { ApiMemberListResponse } from "lapyme/models";

let value: ApiMemberListResponse = {
  requestId: "<id>",
  object: "list",
  url: "/api/v1/members",
  data: [
    {
      object: "member",
      id: "7185440c-8d57-4ebe-bff3-2af5aff5acec",
      name: "<value>",
      isActive: false,
      canSell: false,
    },
  ],
  hasMore: false,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `requestId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `object`                                                                         | *"list"*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `url`                                                                            | *"/api/v1/members"*                                                              | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [models.ApiMemberListResponseData](../models/api-member-list-response-data.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `hasMore`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `nextCursor`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |