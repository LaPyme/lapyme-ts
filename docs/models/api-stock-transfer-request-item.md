# ApiStockTransferRequestItem

## Example Usage

```typescript
import { ApiStockTransferRequestItem } from "lapyme/models";

let value: ApiStockTransferRequestItem = {
  productId: "d209dfd2-ca29-4a80-b434-f52f09b23428",
  quantity: 449645,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `lots`                                                                                                                 | [models.ApiSharedObjecta5d1522378](../models/api-shared-objecta5d1522378.md)[]                                         | :heavy_minus_sign:                                                                                                     | Select an inventory number by code or lot_id. Serial quantity is one. Unavailable outbound codes return line warnings. |
| `componentLots`                                                                                                        | [models.ApiSharedObject7b350f629a](../models/api-shared-object7b350f629a.md)[]                                         | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `productId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `quantity`                                                                                                             | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |