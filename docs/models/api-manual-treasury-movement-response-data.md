# ApiManualTreasuryMovementResponseData

## Example Usage

```typescript
import { ApiManualTreasuryMovementResponseData } from "lapyme/models";

let value: ApiManualTreasuryMovementResponseData = {
  object: "treasury_movement",
  id: "2519412b-1ebf-468b-8d41-8d8a20025def",
  balance: {
    balanceType: "safe",
    balanceId: "0565da82-09e1-48cb-aa2a-f98e3d81fc39",
  },
  direction: "outflow",
  currency: "USD",
  nativeAmount: 157223,
  functionalAmount: 452439,
  functionalCurrency: "ARS",
  exchangeRate: "<value>",
  exchangeRateSource: "actual",
  exchangeRateDate: null,
  exchangeDifferenceAmount: 848760,
  occurredOn: new Date("2025-01-25"),
  sourceType: "<value>",
  accountId: "c27fed93-b5a0-4f19-baf3-4782d3574fc6",
  contactId: "de4140a6-0ab9-41ed-9b9f-4c2b8dc5dfd7",
  description: null,
  reference: null,
  note: "<value>",
  costCenter1Id: "ca014ce0-11bf-45de-bcfa-ae970186bd62",
  costCenter2Id: "5efee02b-0021-4841-bf92-00187108cff2",
  costCenter3Id: "81400b8f-b8c3-4ac6-a962-19267242dcd1",
  distributions: [
    {
      costCenter1Id: "81c3ea8e-bd6b-4261-a544-c93892dc8177",
      amountCents: 312765,
    },
  ],
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
  createdAt: new Date("2025-12-25T06:10:43.195Z"),
  updatedAt: new Date("2024-05-30T19:37:39.909Z"),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                  | *"treasury_movement"*                                                                                     | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `balance`                                                                                                 | [models.ApiSharedObject16a22cc706](../models/api-shared-object16a22cc706.md)                              | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `direction`                                                                                               | [models.ApiSharedEnumba3dc7ee2b](../models/api-shared-enumba3dc7ee2b.md)                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `currency`                                                                                                | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `nativeAmount`                                                                                            | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `functionalAmount`                                                                                        | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `functionalCurrency`                                                                                      | *"ARS"*                                                                                                   | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `exchangeRate`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `exchangeRateSource`                                                                                      | [models.ApiSharedEnum3e321043c1](../models/api-shared-enum3e321043c1.md)                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `exchangeRateDate`                                                                                        | [Date](../types/rfcdate.md)                                                                               | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `exchangeDifferenceAmount`                                                                                | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `occurredOn`                                                                                              | [Date](../types/rfcdate.md)                                                                               | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `sourceType`                                                                                              | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `accountId`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `contactId`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `description`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `reference`                                                                                               | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `note`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `costCenter1Id`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `costCenter2Id`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `costCenter3Id`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `distributions`                                                                                           | [models.Distribution](../models/distribution.md)[]                                                        | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `statementLine`                                                                                           | [models.StatementLine](../models/statement-line.md)                                                       | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `lines`                                                                                                   | [models.ApiManualTreasuryMovementResponseLine](../models/api-manual-treasury-movement-response-line.md)[] | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `rate`                                                                                                    | [models.ApiSharedObject45b71eae86](../models/api-shared-object45b71eae86.md)                              | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `updatedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |