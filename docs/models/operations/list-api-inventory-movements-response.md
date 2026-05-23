# ListApiInventoryMovementsResponse

## Example Usage

```typescript
import { ListApiInventoryMovementsResponse } from "lapyme/models/operations";

let value: ListApiInventoryMovementsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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
        quantityChange: 9992.36,
        reservedQuantityChange: 241.01,
        incomingQuantityChange: 5895.88,
        reason: null,
        notes: "<value>",
        createdAt: new Date("2024-03-08T12:04:51.091Z"),
        createdByName: "<value>",
        warehouseName: "<value>",
        targetWarehouseName: "<value>",
        referenceType: "sale",
        referenceId: "<id>",
        referenceLabel: "<value>",
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://soulful-calculus.com/",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.ApiInventoryMovementListResponse](../../models/api-inventory-movement-list-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |