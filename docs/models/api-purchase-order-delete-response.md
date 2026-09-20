# ApiPurchaseOrderDeleteResponse

## Example Usage

```typescript
import { ApiPurchaseOrderDeleteResponse } from "lapyme/models";

let value: ApiPurchaseOrderDeleteResponse = {
  requestId: "<id>",
  data: {
    purchaseOrder: {
      object: "purchase_order",
      purchaseOrderId: "26826b89-3f04-4b56-ad48-287f55547db3",
      deleted: false,
    },
  },
  warnings: [],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `data`                                                                                            | [models.ApiPurchaseOrderDeleteResponseData](../models/api-purchase-order-delete-response-data.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `warnings`                                                                                        | *any*[]                                                                                           | :heavy_check_mark:                                                                                | N/A                                                                                               |