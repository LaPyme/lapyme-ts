# ApiTreasuryBalanceListResponseData

## Example Usage

```typescript
import { ApiTreasuryBalanceListResponseData } from "lapyme/models";

let value: ApiTreasuryBalanceListResponseData = {
  object: "treasury_balance",
  id: "d405adf0-b136-4b5b-a7a9-c55f8cd8cd8a",
  balanceType: "register",
  bankAccountKind: "bank",
  name: "<value>",
  description: "why even pish after knavishly fluff",
  currency: "ARS",
  nativeAmount: 902121,
  nativeAmountQuality: "exact",
  functionalAmount: 916154,
  functionalCurrency: "ARS",
  anomalyCount: 905908,
  asOf: new Date("2024-05-02"),
  calculatedAt: new Date("2026-03-15T07:06:04.880Z"),
  visibilityScope: "own",
  status: "active",
  createdAt: new Date("2025-11-29T14:00:46.054Z"),
  updatedAt: new Date("2026-11-25T06:21:34.766Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"treasury_balance"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balanceType`                                                                                 | [models.ApiSharedEnum53162db3eb](../models/api-shared-enum53162db3eb.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `bankAccountKind`                                                                             | [models.ApiSharedEnum83b768347f](../models/api-shared-enum83b768347f.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [models.ApiSharedEnumffb4886f2b](../models/api-shared-enumffb4886f2b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nativeAmount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nativeAmountQuality`                                                                         | [models.ApiSharedEnum714ff181d6](../models/api-shared-enum714ff181d6.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `functionalAmount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `functionalCurrency`                                                                          | *"ARS"*                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `anomalyCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `asOf`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `calculatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibilityScope`                                                                             | [models.ApiSharedEnumd440d6785b](../models/api-shared-enumd440d6785b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnumd952d5ce8e](../models/api-shared-enumd952d5ce8e.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |