# QueryApiReferenceCandidatesResponse

## Example Usage

```typescript
import { QueryApiReferenceCandidatesResponse } from "lapyme/models/operations";

let value: QueryApiReferenceCandidatesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://basic-finer.info/",
    data: [
      {
        index: 852759,
        candidates: [],
      },
    ],
    hasMore: false,
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `result`                                                                                            | [models.ApiReferenceCandidateQueryResponse](../../models/api-reference-candidate-query-response.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |