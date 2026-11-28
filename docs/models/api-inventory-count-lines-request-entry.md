# ApiInventoryCountLinesRequestEntry

## Example Usage

```typescript
import { ApiInventoryCountLinesRequestEntry } from "lapyme/models";

let value: ApiInventoryCountLinesRequestEntry = {
  productId: "8cf75b2c-ea66-43d5-bffc-23e2f30c7c7e",
  mode: "set",
  quantity: 9959.62,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `productId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `mode`                                                                                                                 | [models.ApiInventoryCountLinesRequestMode](../models/api-inventory-count-lines-request-mode.md)                        | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `quantity`                                                                                                             | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `lots`                                                                                                                 | [models.ApiSharedObjecta5d1522378](../models/api-shared-objecta5d1522378.md)[]                                         | :heavy_minus_sign:                                                                                                     | Select an inventory number by code or lot_id. Serial quantity is one. Unavailable outbound codes return line warnings. |