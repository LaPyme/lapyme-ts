# DeleteApiPriceListResponse

## Example Usage

```typescript
import { DeleteApiPriceListResponse } from "lapyme/models/operations";

let value: DeleteApiPriceListResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    requestId: "<id>",
    data: {
      priceListId: "cd709ac7-86c8-499c-bf3d-90d6120d9307",
    },
    warnings: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `result`                                                                            | [models.ApiPriceListDeleteResponse](../../models/api-price-list-delete-response.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |