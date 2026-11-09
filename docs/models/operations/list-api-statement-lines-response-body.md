# ListApiStatementLinesResponseBody

Treasury result or immutable replay

## Example Usage

```typescript
import { ListApiStatementLinesResponseBody } from "lapyme/models/operations";

let value: ListApiStatementLinesResponseBody = {
  requestId: "<id>",
  data: [],
  object: "list",
  url: "https://determined-comparison.biz/",
  hasMore: true,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [operations.ListApiStatementLinesData](../../models/operations/list-api-statement-lines-data.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `object`                                                                                           | *"list"*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `hasMore`                                                                                          | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `nextCursor`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |