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
  amount: 177899,
  asOf: new Date("2025-04-01"),
  calculatedAt: new Date("2024-05-12T04:00:00.237Z"),
  visibilityScope: "own",
  status: "inactive",
  createdAt: new Date("2025-12-03T14:30:18.060Z"),
  updatedAt: new Date("2025-06-18T04:39:32.728Z"),
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
| `currency`                                                                                    | *"PES"*                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `asOf`                                                                                        | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `calculatedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibilityScope`                                                                             | [models.ApiSharedEnumd440d6785b](../models/api-shared-enumd440d6785b.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ApiSharedEnumd952d5ce8e](../models/api-shared-enumd952d5ce8e.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |