# ListApiSuppliersResponse

## Example Usage

```typescript
import { ListApiSuppliersResponse } from "lapyme/models/operations";

let value: ListApiSuppliersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://next-representation.com/",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiSupplierListResponse](../../models/api-supplier-list-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |