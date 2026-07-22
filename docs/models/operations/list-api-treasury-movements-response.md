# ListApiTreasuryMovementsResponse

## Example Usage

```typescript
import { ListApiTreasuryMovementsResponse } from "lapyme/models/operations";

let value: ListApiTreasuryMovementsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        object: "treasury_movement",
        id: "6d858342-6faf-40e8-8fdc-d142bfb8abc8",
        balanceId: "33e91a64-6fa7-4f6a-92fe-563d9898e5ba",
        balanceType: "register",
        balanceName: "<value>",
        occurredOn: new Date("2025-11-20"),
        amount: 121517,
        currency: "PES",
        movementType: "customer_payment",
        sourceType: "<value>",
        sourceId: "55cb20a1-f992-4421-9f85-bd0d4e8bcfc9",
        reference: "<value>",
        description:
          "frenetically along brr besides abaft though down always offend uproot",
        visibilityScope: "organization",
        createdAt: new Date("2024-11-15T23:57:15.018Z"),
      },
    ],
    hasMore: true,
    nextCursor: null,
    object: "list",
    url: "https://joyous-decryption.net/",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | [models.ApiTreasuryMovementListResponse](../../models/api-treasury-movement-list-response.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |