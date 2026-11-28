# ApiInventoryCountRequest

## Example Usage

```typescript
import { ApiInventoryCountRequest } from "lapyme/models";

let value: ApiInventoryCountRequest = {
  warehouseId: "02e968fc-38ae-4902-8c44-b0996d15e380",
  type: "full",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `warehouseId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `type`                                                                               | [models.ApiInventoryCountRequestType](../models/api-inventory-count-request-type.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `notes`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `productIds`                                                                         | *string*[]                                                                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |