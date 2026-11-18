# ApiReferenceCandidateQueryResponse

## Example Usage

```typescript
import { ApiReferenceCandidateQueryResponse } from "lapyme/models";

let value: ApiReferenceCandidateQueryResponse = {
  requestId: "<id>",
  object: "list",
  url: "https://dreary-descendant.net/",
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `object`                                                                                                    | *"list"*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `url`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `data`                                                                                                      | [models.ApiReferenceCandidateQueryResponseData](../models/api-reference-candidate-query-response-data.md)[] | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `hasMore`                                                                                                   | *false*                                                                                                     | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `nextCursor`                                                                                                | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |