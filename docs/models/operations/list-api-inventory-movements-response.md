# ListApiInventoryMovementsResponse

## Example Usage

```typescript
import { ListApiInventoryMovementsResponse } from "lapyme/models/operations";

let value: ListApiInventoryMovementsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        object: "inventory_movement",
        id: "7714d6b2-e108-4eaf-9839-84aa8ea660ba",
        movementType: "<value>",
        quantity: 7293.1,
        balance: 6690.44,
        reservedBalance: 9992.36,
        incomingBalance: 241.01,
        quantityChange: 5895.88,
        reservedQuantityChange: 123.33,
        incomingQuantityChange: 1774.44,
        reason: null,
        notes: "<value>",
        createdAt: new Date("2026-06-14T22:22:25.068Z"),
        createdBy: "a71bffc1-c116-493f-b8ee-4c224b615cdd",
        createdByName: "<value>",
        warehouseName: "<value>",
        targetWarehouseName: "<value>",
        otherWarehouseName: "<value>",
        referenceType: null,
        referenceId: "<id>",
        referenceLabel: "<value>",
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://upset-pliers.net/",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.ApiInventoryMovementListResponse](../../models/api-inventory-movement-list-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |