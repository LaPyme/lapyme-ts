# DeleteApiDraftPurchaseOrderResponse

## Example Usage

```typescript
import { DeleteApiDraftPurchaseOrderResponse } from "lapyme/models/operations";

let value: DeleteApiDraftPurchaseOrderResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      purchaseOrder: {
        object: "purchase_order",
        purchaseOrderId: "26826b89-3f04-4b56-ad48-287f55547db3",
        deleted: false,
      },
    },
    warnings: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiPurchaseOrderDeleteResponse](../../models/api-purchase-order-delete-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |