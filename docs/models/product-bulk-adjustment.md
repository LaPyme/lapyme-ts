# ProductBulkAdjustment

## Example Usage

```typescript
import { ProductBulkAdjustment } from "lapyme/models";

let value: ProductBulkAdjustment = {
  object: "product_bulk_adjustment",
  updated: 945039,
  skipped: 14271,
  skippedByReason: {},
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `object`                                                 | *"product_bulk_adjustment"*                              | :heavy_check_mark:                                       | N/A                                                      |
| `updated`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `skipped`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `skippedByReason`                                        | [models.SkippedByReason](../models/skipped-by-reason.md) | :heavy_check_mark:                                       | N/A                                                      |