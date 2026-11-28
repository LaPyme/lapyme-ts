# ApiInventoryLotDetailResponseData

## Example Usage

```typescript
import { ApiInventoryLotDetailResponseData } from "lapyme/models";

let value: ApiInventoryLotDetailResponseData = {
  object: "inventory_lot",
  id: "6575b97d-7624-4068-ad4f-3e74f8f80f82",
  productId: "be89a665-d86e-47d4-a81d-3403036ebf68",
  kind: "customs",
  code: "<value>",
  expirationDate: new Date("2025-01-10"),
  customsDate: new Date("2025-01-21"),
  createdAt: new Date("2024-04-02T01:55:02.317Z"),
  updatedAt: new Date("2025-04-26T21:44:58.214Z"),
  balances: [],
  movements: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"inventory_lot"*                                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `kind`                                                                                        | [models.ApiSharedEnum0f8e04f38d](../models/api-shared-enum0f8e04f38d.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expirationDate`                                                                              | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customsDate`                                                                                 | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unitCost`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `balances`                                                                                    | [models.Balance](../models/balance.md)[]                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `movements`                                                                                   | [models.Movement](../models/movement.md)[]                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |