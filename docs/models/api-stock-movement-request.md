# ApiStockMovementRequest

## Example Usage

```typescript
import { ApiStockMovementRequest } from "lapyme/models";

let value: ApiStockMovementRequest = {
  warehouseId: "cad7377e-e02b-4b42-8059-ee390e61dd37",
  mode: "replace",
  operationDate: new Date("2025-04-15T19:46:16.618Z"),
  reason: "<value>",
  items: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `warehouseId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `mode`                                                                                        | [models.Mode](../models/mode.md)                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `direction`                                                                                   | [models.Direction](../models/direction.md)                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `operationDate`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notes`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `items`                                                                                       | [models.ApiStockMovementRequestItem](../models/api-stock-movement-request-item.md)[]          | :heavy_check_mark:                                                                            | N/A                                                                                           |