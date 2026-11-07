# GetApiTreasuryMovementResponse

## Example Usage

```typescript
import { GetApiTreasuryMovementResponse } from "lapyme/models/operations";

let value: GetApiTreasuryMovementResponse = {
  headers: {
    "key": [],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "treasury_movement",
      id: "0c59f046-189c-4a8a-8b99-e9523053c81a",
      balance: {
        balanceType: "bank_account",
        balanceId: "9471f19b-7851-4431-8bd9-42f52aba1cf6",
      },
      direction: "inflow",
      currency: "ARS",
      nativeAmount: 76302,
      functionalAmount: 397464,
      functionalCurrency: "ARS",
      exchangeRate: "<value>",
      exchangeRateSource: "manual",
      exchangeRateDate: new Date("2025-07-22"),
      exchangeDifferenceAmount: 744363,
      occurredOn: new Date("2024-10-21"),
      sourceType: "<value>",
      accountId: "ab11857f-a1c2-44f7-89a9-d483b6e8cd8f",
      contactId: "1c041624-4956-4cf0-b1fc-cf84aa9e1548",
      description:
        "because honestly incidentally grandpa hospitalization although",
      reference: "<value>",
      note: "<value>",
      costCenter1Id: "52563e8f-6c4a-4d74-b92c-be4851497b8c",
      costCenter2Id: "24d12319-1651-4a54-a109-e97716506f8a",
      costCenter3Id: "830265b2-d5b4-4f39-81bb-8df52f52b8d8",
      distributions: [
        {
          costCenter1Id: "5feb671f-ed03-4f5c-a291-214e9dcc5da6",
          amountCents: 429701,
        },
      ],
      statementLine: {
        source: "<value>",
        key: "<key>",
      },
      lines: [],
      rate: {
        value: "<value>",
        rateDate: new Date("2024-09-17"),
        source: "manual",
      },
      createdAt: new Date("2026-10-16T17:51:35.272Z"),
      updatedAt: new Date("2024-08-07T19:48:50.123Z"),
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [models.ApiManualTreasuryMovementResponse](../../models/api-manual-treasury-movement-response.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |