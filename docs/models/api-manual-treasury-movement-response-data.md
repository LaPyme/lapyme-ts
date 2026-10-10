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
  occurredOn: new Date("2024-08-03"),
  sourceType: "<value>",
  accountId: "a14d5ac2-7fed-493b-95a0-f19af34782d3",
  contactId: "4fc6f2de-4140-4a60-bab9-1edb9f4c2b8d",
  description: "hmph solidly yum urban pace surprise although wearily nor",
  reference: "<value>",
  note: null,
  costCenter1Id: "cff2fb81-400b-48fb-98c3-ac6962192672",
  costCenter2Id: "dcd18b81-c3ea-48eb-bd6b-261544c93892",
  costCenter3Id: "817785cd-43f3-40d3-91d6-7c6d81487e7d",
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
  createdAt: new Date("2026-06-22T00:49:06.001Z"),
  updatedAt: new Date("2026-04-28T13:40:29.896Z"),
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