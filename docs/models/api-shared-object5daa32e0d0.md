# ApiSharedObject5daa32e0d0

## Example Usage

```typescript
import { ApiSharedObject5daa32e0d0 } from "lapyme/models";

let value: ApiSharedObject5daa32e0d0 = {
  productId: "4751376e-21af-4430-8a9c-b00f5f4d6200",
  lots: [],
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `productId`                                                                                                                       | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `lots`                                                                                                                            | [models.ApiSharedObject0b6330efb6](../models/api-shared-object0b6330efb6.md)[]                                                    | :heavy_check_mark:                                                                                                                | Select an inventory number by code or lot_id. Serial quantity is one. Existing lot attributes may accompany an inbound selection. |