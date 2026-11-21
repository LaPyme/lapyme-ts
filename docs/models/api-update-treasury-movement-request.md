# ApiUpdateTreasuryMovementRequest

## Example Usage

```typescript
import { ApiUpdateTreasuryMovementRequest } from "lapyme/models";

let value: ApiUpdateTreasuryMovementRequest = {
  balance: {
    balanceType: "bank_account",
    balanceId: "859c8ddf-e499-4a79-ab5f-ea18e080f5d4",
  },
  direction: "inflow",
  amount: 112255,
  occurredOn: new Date("2025-03-01"),
  updatedAt: new Date("2025-07-18T02:57:09.855Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `balance`                                                                                     | [models.ApiSharedObject1bdf8f7029](../models/api-shared-object1bdf8f7029.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `direction`                                                                                   | [models.ApiSharedEnumba3dc7ee2b](../models/api-shared-enumba3dc7ee2b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `occurredOn`                                                                                  | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `accountId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `contactId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lines`                                                                                       | [models.ApiSharedObject39414c953b](../models/api-shared-object39414c953b.md)[]                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `exchangeRate`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `statementLine`                                                                               | [models.ApiSharedObjectfd7f591c89](../models/api-shared-objectfd7f591c89.md)                  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `reference`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `note`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `costCenter1Id`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `costCenter2Id`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `costCenter3Id`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `distributions`                                                                               | [models.ApiSharedObject95caea9bee](../models/api-shared-object95caea9bee.md)[]                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |