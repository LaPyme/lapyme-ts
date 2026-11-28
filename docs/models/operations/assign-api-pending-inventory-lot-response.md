# AssignApiPendingInventoryLotResponse

## Example Usage

```typescript
import { AssignApiPendingInventoryLotResponse } from "lapyme/models/operations";

let value: AssignApiPendingInventoryLotResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
      object: "inventory_lot_assignment",
      id: "c9247c17-de55-444b-9e09-dad5eec320d6",
      lotId: "0907b1de-4d34-407c-a8ad-0b212bed6312",
      movementId: "d6bcbc78-655d-4d5d-9980-dea31ceedba8",
    },
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `headers`                                                                             | Record<string, *string*[]>                                                            | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `result`                                                                              | [models.ApiAssignPendingLotResponse](../../models/api-assign-pending-lot-response.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |