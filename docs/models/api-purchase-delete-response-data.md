# ApiPurchaseDeleteResponseData

## Example Usage

```typescript
import { ApiPurchaseDeleteResponseData } from "lapyme/models";

let value: ApiPurchaseDeleteResponseData = {
  purchase: {
    object: "purchase",
    id: "e7c3c120-ccae-45ad-8ca7-ba1c95d9a606",
    deleted: false,
    stockUndone: true,
    purchaseOrdersAffected: true,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `purchase`                               | [models.Purchase](../models/purchase.md) | :heavy_check_mark:                       | N/A                                      |