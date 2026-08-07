# ApiTreasuryBalanceListResponseData

## Example Usage

```typescript
import { ApiTreasuryBalanceListResponseData } from "lapyme/models";

let value: ApiTreasuryBalanceListResponseData = {
  object: "treasury_balance",
  id: "d405adf0-b136-4b5b-a7a9-c55f8cd8cd8a",
  balanceType: "register",
  name: "<value>",
  description: "comparison enlist aggravating fiercely however",
  currency: "PES",
  nativeAmount: 120590,
  nativeAmountQuality: "unavailable",
  functionalAmount: 932072,
  functionalCurrency: "PES",
  anomalyCount: 641063,
  asOf: new Date("2025-06-18"),
  calculatedAt: new Date("2025-12-13T03:47:36.772Z"),
  visibilityScope: "organization",
  status: "active",
  createdAt: new Date("2025-02-09T10:17:07.805Z"),
  updatedAt: new Date("2026-09-15T17:22:05.315Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"treasury_balance"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balanceType`                                                                                 | [models.ApiSharedEnum53162db3eb](../models/api-shared-enum53162db3eb.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [models.ApiSharedEnum6cfb146157](../models/api-shared-enum6cfb146157.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nativeAmount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nativeAmountQuality`                                                                         | [models.ApiSharedEnum714ff181d6](../models/api-shared-enum714ff181d6.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `functionalAmount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `functionalCurrency`                                                                          | *"PES"*                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `anomalyCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `asOf`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `calculatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibilityScope`                                                                             | [models.ApiSharedEnumd440d6785b](../models/api-shared-enumd440d6785b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnumd952d5ce8e](../models/api-shared-enumd952d5ce8e.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |