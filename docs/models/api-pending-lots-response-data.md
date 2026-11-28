# ApiPendingLotsResponseData

## Example Usage

```typescript
import { ApiPendingLotsResponseData } from "lapyme/models";

let value: ApiPendingLotsResponseData = {
  outbound: [],
  onHand: [
    {
      productId: "e400fa25-9614-44f5-8f86-00e58f977254",
      productName: "<value>",
      warehouseId: "9d8e1cbe-83ad-4721-98a8-c48d36643d4a",
      quantity: 1124.46,
    },
  ],
  nextOffset: 377158,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `outbound`                                 | [models.Outbound](../models/outbound.md)[] | :heavy_check_mark:                         | N/A                                        |
| `onHand`                                   | [models.OnHand](../models/on-hand.md)[]    | :heavy_check_mark:                         | N/A                                        |
| `nextOffset`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |