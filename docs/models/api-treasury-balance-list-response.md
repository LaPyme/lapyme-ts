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
      currency: "ARS",
      nativeAmount: 458401,
      nativeAmountQuality: "derived",
      functionalAmount: 976765,
      functionalCurrency: "ARS",
      anomalyCount: 780911,
      asOf: new Date("2026-07-17"),
      calculatedAt: new Date("2025-12-30T17:06:25.334Z"),
      visibilityScope: "organization",
      status: "active",
      createdAt: new Date("2025-01-30T18:30:34.617Z"),
      updatedAt: new Date("2025-09-19T13:13:13.183Z"),
    },
  ],
  hasMore: false,
  nextCursor: "<value>",
  object: "list",
  url: "https://jam-packed-cinema.info",
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