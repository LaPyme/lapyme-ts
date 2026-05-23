# ListV2ProductsResponse

## Example Usage

```typescript
import { ListV2ProductsResponse } from "lapyme/models/operations";

let value: ListV2ProductsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    success: true,
    data: [],
    pagination: {
      page: 943898,
      limit: 665923,
      total: 501198,
      totalPages: 15859,
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [models.V2ProductListResponse](../../models/v2-product-list-response.md) | :heavy_check_mark:                                                       | N/A                                                                      |