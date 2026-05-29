# ListApiCostCenterDimensionsResponseBody

Dimensiones listadas exitosamente

## Example Usage

```typescript
import { ListApiCostCenterDimensionsResponseBody } from "lapyme/models/operations";

let value: ListApiCostCenterDimensionsResponseBody = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `object`                                                                     | [models.ApiSharedEnume0cf0306aa](../../models/api-shared-enume0cf0306aa.md)  | :heavy_minus_sign:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiCostCenterDimension](../../models/api-cost-center-dimension.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `nextCursor`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |