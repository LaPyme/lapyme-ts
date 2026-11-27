# ApiInventoryCountResponseData

## Example Usage

```typescript
import { ApiInventoryCountResponseData } from "lapyme/models";

let value: ApiInventoryCountResponseData = {
  object: "inventory_count",
  id: "602c4a5a-bb02-4a30-9a7c-28652c3071b9",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `object`                                                                                   | *"inventory_count"*                                                                        | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [models.ApiInventoryCountResponseStatus](../models/api-inventory-count-response-status.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `warehouseId`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `stockOperationId`                                                                         | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `criticalWarningFingerprint`                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `lines`                                                                                    | [models.ApiInventoryCountResponseLine](../models/api-inventory-count-response-line.md)[]   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `additionalProperties`                                                                     | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |