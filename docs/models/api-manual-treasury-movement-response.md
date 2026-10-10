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
    occurredOn: new Date("2025-05-01"),
    sourceType: "<value>",
    accountId: "c036ea20-c7c0-4bc8-824f-1b92c33113d6",
    contactId: "9930cc6d-0d90-44fd-a96c-721779ade396",
    description: "furiously minus gym plain plain true",
    reference: "<value>",
    note: "<value>",
    costCenter1Id: "981287bb-9fc0-4a9e-b4fa-f9dee5acf0ce",
    costCenter2Id: null,
    costCenter3Id: "ef4fea3a-f196-4dae-8fdc-bd3930fecf03",
    distributions: [
      {
        costCenter1Id: "2306a9f3-6ebd-432b-a61f-561418c09dc3",
        amountCents: 753817,
      },
    ],
    statementLine: {
      source: "<value>",
      key: "<key>",
    },
    lines: [],
    rate: {
      value: "<value>",
      rateDate: new Date("2024-06-10"),
      source: "bcra",
    },
    createdAt: new Date("2024-10-07T12:21:00.105Z"),
    updatedAt: new Date("2025-07-15T13:58:10.082Z"),
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `data`                                                                                                  | [models.ApiManualTreasuryMovementResponseData](../models/api-manual-treasury-movement-response-data.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |