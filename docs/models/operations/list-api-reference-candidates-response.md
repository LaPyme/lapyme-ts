# ListApiReferenceCandidatesResponse

## Example Usage

```typescript
import { ListApiReferenceCandidatesResponse } from "lapyme/models/operations";

let value: ListApiReferenceCandidatesResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://homely-massage.info/",
    data: [],
    hasMore: false,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [models.ApiReferenceCandidateListResponse](../../models/api-reference-candidate-list-response.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |