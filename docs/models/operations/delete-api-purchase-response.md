# DeleteApiPurchaseResponse

## Example Usage

```typescript
import { DeleteApiPurchaseResponse } from "lapyme/models/operations";

let value: DeleteApiPurchaseResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
      purchase: {
        object: "purchase",
        id: "e7c3c120-ccae-45ad-8ca7-ba1c95d9a606",
        deleted: false,
        stockUndone: true,
        purchaseOrdersAffected: true,
      },
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiPurchaseDeleteResponse](../../models/api-purchase-delete-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |