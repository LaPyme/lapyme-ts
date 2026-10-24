# ApiReferenceCandidateListResponse

## Example Usage

```typescript
import { ApiReferenceCandidateListResponse } from "lapyme/models";

let value: ApiReferenceCandidateListResponse = {
  requestId: "<id>",
  object: "list",
  url: "https://likely-sauerkraut.com/",
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `object`                                                                                                  | *"list"*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `url`                                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `data`                                                                                                    | [models.ApiReferenceCandidateListResponseData](../models/api-reference-candidate-list-response-data.md)[] | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `hasMore`                                                                                                 | *false*                                                                                                   | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `nextCursor`                                                                                              | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |