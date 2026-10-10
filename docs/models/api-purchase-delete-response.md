# ApiPurchaseDeleteResponse

## Example Usage

```typescript
import { ApiPurchaseDeleteResponse } from "lapyme/models";

let value: ApiPurchaseDeleteResponse = {
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
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiPurchaseDeleteResponseData](../models/api-purchase-delete-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `warnings`                                                                             | *any*[]                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |