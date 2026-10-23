# ApiManualTreasuryMovementResponse

## Example Usage

```typescript
import { ApiManualTreasuryMovementResponse } from "lapyme/models";

let value: ApiManualTreasuryMovementResponse = {
  requestId: "<id>",
  data: {
    object: "treasury_movement",
    id: "4b6727c0-b2f2-43da-8b12-5f77a2e84c72",
    balance: {
      balanceType: "safe",
      balanceId: "0565da82-09e1-48cb-aa2a-f98e3d81fc39",
    },
    direction: "outflow",
    currency: "ARS",
    nativeAmount: 694189,
    functionalAmount: 359808,
    functionalCurrency: "ARS",
    exchangeRate: "<value>",
    exchangeRateSource: "manual",
    exchangeRateDate: null,
    exchangeDifferenceAmount: 410423,
    occurredOn: new Date("2026-09-05"),
    sourceType: "<value>",
    accountId: "20c7c0bc-824f-41b9-b2c3-3113d61c9930",
    contactId: "6d0d904f-d96c-4721-8779-ade3968d6910",
    description: "after disbar charming",
    reference: "<value>",
    note: "<value>",
    costCenter1Id: "beea96e5-5bfd-43fb-9981-287bb9fc0a9e",
    costCenter2Id: "af9dee5a-cf0c-4ed0-b7ef-4fea3af196da",
    costCenter3Id: "dcbd3930-fecf-4031-ba13-74811dde1727",
    distributions: [],
    statementLine: {
      source: "<value>",
      key: "<key>",
    },
    lines: [
      {
        accountId: "43f30d31-d67c-46d8-b148-7e7d5c2306a9",
        amount: 206218,
        costCenter1Id: "ebd32b61-f561-4418-9c09-dc3ac325dc03",
        costCenter2Id: "e011a72c-391f-4dfa-ae8a-f60c171653b7",
        costCenter3Id: null,
        description: "sailor electrify following",
      },
    ],
    rate: {
      value: "<value>",
      rateDate: new Date("2024-06-10"),
      source: "bcra",
    },
    createdAt: new Date("2024-10-29T18:55:06.465Z"),
    updatedAt: new Date("2026-10-29T15:26:51.136Z"),
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `data`                                                                                                  | [models.ApiManualTreasuryMovementResponseData](../models/api-manual-treasury-movement-response-data.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |