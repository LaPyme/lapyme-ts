# ListV2PurchasesResponse

## Example Usage

```typescript
import { ListV2PurchasesResponse } from "lapyme/models/operations";

let value: ListV2PurchasesResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    success: true,
    data: [],
    pagination: {
      page: 921075,
      limit: 429581,
      total: 482668,
      totalPages: 84256,
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.V2PurchaseListResponse](../../models/v2-purchase-list-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |