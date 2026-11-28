# ListApiInventoryLotsResponse

## Example Usage

```typescript
import { ListApiInventoryLotsResponse } from "lapyme/models/operations";

let value: ListApiInventoryLotsResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    object: "list",
    url: "https://austere-rawhide.biz/",
    data: [],
    hasMore: false,
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `result`                                                                              | [models.ApiInventoryLotListResponse](../../models/api-inventory-lot-list-response.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |