# ListApiInventoryMovementsResponse

## Example Usage

```typescript
import { ListApiInventoryMovementsResponse } from "lapyme/models/operations";

let value: ListApiInventoryMovementsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        lots: [],
        object: "inventory_movement",
        id: "714d6b2e-108e-4af8-a398-4aa8ea660ba7",
        movementType: "<value>",
        quantity: 6690.44,
        balance: 9992.36,
        reservedBalance: 241.01,
        incomingBalance: 5895.88,
        quantityChange: 123.33,
        reservedQuantityChange: 1774.44,
        incomingQuantityChange: 615.9,
        reason: "<value>",
        notes: "<value>",
        createdAt: new Date("2025-12-01T10:16:34.024Z"),
        createdBy: "71bffc1c-1169-43f8-bee4-c224b615cdde",
        createdByName: "<value>",
        warehouseName: "<value>",
        targetWarehouseName: "<value>",
        otherWarehouseName: null,
        referenceType: "sale",
        referenceId: "<id>",
        referenceLabel: "<value>",
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://somber-wafer.biz",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [models.ApiInventoryMovementListResponse](../../models/api-inventory-movement-list-response.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |