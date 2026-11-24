# ListApiStatementPeriodsResponse

## Example Usage

```typescript
import { ListApiStatementPeriodsResponse } from "lapyme/models/operations";

let value: ListApiStatementPeriodsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [],
    object: "list",
    url: "https://fluffy-discourse.biz/",
    hasMore: true,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `result`                                                                                                              | [operations.ListApiStatementPeriodsResponseBody](../../models/operations/list-api-statement-periods-response-body.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |