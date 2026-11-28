# AssignApiPendingInventoryLotRequest

## Example Usage

```typescript
import { AssignApiPendingInventoryLotRequest } from "lapyme/models/operations";

let value: AssignApiPendingInventoryLotRequest = {
  idempotencyKey: "<value>",
  body: {
    code: "<value>",
    quantity: 8570.95,
    target: "on_hand",
    productId: "a13e1295-f234-4dc0-9ba1-7332a1ddeb2a",
    warehouseId: "b199b5ed-6519-4f9c-b41b-7cb0151ea104",
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `idempotencyKey`                    | *string*                            | :heavy_check_mark:                  | N/A                                 |
| `body`                              | *models.ApiAssignPendingLotRequest* | :heavy_check_mark:                  | N/A                                 |