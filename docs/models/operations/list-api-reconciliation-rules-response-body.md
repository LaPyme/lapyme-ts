# ListApiReconciliationRulesResponseBody

Treasury result or immutable replay

## Example Usage

```typescript
import { ListApiReconciliationRulesResponseBody } from "lapyme/models/operations";

let value: ListApiReconciliationRulesResponseBody = {
  requestId: "<id>",
  data: [],
  object: "list",
  url: "https://spiteful-cannon.com/",
  hasMore: false,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `requestId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `data`                                                                            | [models.ApiSharedObjectba292d6681](../../models/api-shared-objectba292d6681.md)[] | :heavy_check_mark:                                                                | N/A                                                                               |
| `object`                                                                          | *"list"*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `url`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `hasMore`                                                                         | *boolean*                                                                         | :heavy_check_mark:                                                                | N/A                                                                               |
| `nextCursor`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |