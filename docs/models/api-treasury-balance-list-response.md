# ApiTreasuryBalanceListResponse

## Example Usage

```typescript
import { ApiTreasuryBalanceListResponse } from "lapyme/models";

let value: ApiTreasuryBalanceListResponse = {
  requestId: "<id>",
  data: [
    {
      object: "treasury_balance",
      id: "f8d0c448-afa4-4502-b69c-8cde8f97d352",
      balanceType: "safe",
      name: "<value>",
      description: "cheerfully boo at boiling boohoo meh psst",
      currency: "PES",
      amount: 118604,
      asOf: new Date("2024-08-16"),
      calculatedAt: new Date("2025-05-17T09:46:37.383Z"),
      visibilityScope: "own",
      status: "inactive",
      createdAt: new Date("2026-05-05T21:04:02.594Z"),
      updatedAt: new Date("2026-07-17T12:37:56.451Z"),
    },
  ],
  hasMore: false,
  nextCursor: "<value>",
  object: "list",
  url: "https://heartfelt-milestone.net/",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `data`                                                                                              | [models.ApiTreasuryBalanceListResponseData](../models/api-treasury-balance-list-response-data.md)[] | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `hasMore`                                                                                           | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `nextCursor`                                                                                        | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `object`                                                                                            | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)                            | :heavy_check_mark:                                                                                  | List-envelope discriminator.                                                                        |
| `url`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | Requested list path.                                                                                |