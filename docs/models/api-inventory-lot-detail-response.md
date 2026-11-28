# ApiInventoryLotDetailResponse

## Example Usage

```typescript
import { ApiInventoryLotDetailResponse } from "lapyme/models";

let value: ApiInventoryLotDetailResponse = {
  requestId: "<id>",
  data: {
    object: "inventory_lot",
    id: "0250e04f-9fe0-4da6-8d80-b2ddab5c7daf",
    productId: "2b076173-3b3b-49ff-a6da-dd98271d6572",
    kind: "customs",
    code: "<value>",
    expirationDate: new Date("2025-02-07"),
    customsDate: new Date("2026-09-26"),
    createdAt: new Date("2025-11-12T07:36:53.815Z"),
    updatedAt: new Date("2025-05-28T22:38:05.980Z"),
    balances: [
      {
        warehouseId: "444aa4fb-a93f-474a-994d-05237b364db4",
        warehouseName: "<value>",
        quantity: 5937.06,
      },
    ],
    movements: [
      {
        movementId: "5596bd1b-4c57-46a3-8bfc-1a54d17f7b76",
        warehouseId: "502a75d3-463f-4ef0-a296-1655bfd6fa55",
        occurredAt: new Date("2024-11-20T00:51:47.820Z"),
        quantity: 3358.57,
        type: "<value>",
        sourceOrganizationName: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `requestId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `data`                                                                                          | [models.ApiInventoryLotDetailResponseData](../models/api-inventory-lot-detail-response-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |