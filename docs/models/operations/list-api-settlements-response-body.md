# ListApiSettlementsResponseBody

Committed resource or replay

## Example Usage

```typescript
import { ListApiSettlementsResponseBody } from "lapyme/models/operations";

let value: ListApiSettlementsResponseBody = {
  requestId: "<id>",
  data: [],
  object: "list",
  url: "https://metallic-expansion.biz",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `requestId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `data`                                                                            | [models.ApiSharedObject0b2fa2e51f](../../models/api-shared-object0b2fa2e51f.md)[] | :heavy_check_mark:                                                                | N/A                                                                               |
| `object`                                                                          | *"list"*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `url`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `hasMore`                                                                         | *boolean*                                                                         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `nextCursor`                                                                      | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |