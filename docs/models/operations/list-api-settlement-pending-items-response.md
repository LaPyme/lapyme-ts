# ListApiSettlementPendingItemsResponse

Committed resource or replay

## Example Usage

```typescript
import { ListApiSettlementPendingItemsResponse } from "lapyme/models/operations";

let value: ListApiSettlementPendingItemsResponse = {
  requestId: "<id>",
  data: [],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `data`                                                                                                              | [operations.ListApiSettlementPendingItemsData](../../models/operations/list-api-settlement-pending-items-data.md)[] | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `object`                                                                                                            | *"list"*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `url`                                                                                                               | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `hasMore`                                                                                                           | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `nextCursor`                                                                                                        | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |