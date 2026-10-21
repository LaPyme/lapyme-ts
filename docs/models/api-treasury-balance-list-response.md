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
      bankAccountKind: "credit_card",
      name: "<value>",
      description:
        "before frightfully between drat why nor fooey immediate jam-packed",
      currency: "ARS",
      nativeAmount: 372634,
      nativeAmountQuality: "derived",
      functionalAmount: 919693,
      functionalCurrency: "ARS",
      anomalyCount: 241001,
      asOf: new Date("2026-08-20"),
      calculatedAt: new Date("2025-01-08T12:22:37.018Z"),
      visibilityScope: "own",
      status: "active",
      createdAt: new Date("2025-10-06T06:39:11.265Z"),
      updatedAt: new Date("2025-11-06T10:11:31.497Z"),
    },
  ],
  hasMore: false,
  nextCursor: null,
  object: "list",
  url: "https://responsible-deduction.net/",
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