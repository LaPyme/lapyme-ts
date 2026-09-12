# ListApiTreasuryMovementsResponse

## Example Usage

```typescript
import { ListApiTreasuryMovementsResponse } from "lapyme/models/operations";

let value: ListApiTreasuryMovementsResponse = {
  headers: {},
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
        currency: "ARS",
        nativeAmount: 728240,
        nativeAmountQuality: "derived",
        functionalAmount: 330455,
        functionalCurrency: "ARS",
        functionalAmountOrigin: "legacy_unknown",
        rate: {
          value: "<value>",
          rateDate: new Date("2024-06-10"),
          source: "bcra",
        },
        movementType: "funds_transfer",
        sourceType: "<value>",
        sourceId: null,
        reference: "<value>",
        description: "hm provided unless who rag draft ouch",
        visibilityScope: "organization",
        createdAt: new Date("2024-12-09T23:28:40.376Z"),
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://bleak-bidet.biz",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | [models.ApiTreasuryMovementListResponse](../../models/api-treasury-movement-list-response.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |