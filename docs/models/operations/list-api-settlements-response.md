# ListApiSettlementsResponse

Committed resource or replay

## Example Usage

```typescript
import { ListApiSettlementsResponse } from "lapyme/models/operations";

let value: ListApiSettlementsResponse = {
  requestId: "<id>",
  data: [],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `requestId`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `data`                                                                                      | [operations.ListApiSettlementsData](../../models/operations/list-api-settlements-data.md)[] | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `object`                                                                                    | *"list"*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `url`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `hasMore`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `nextCursor`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |