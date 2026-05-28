# ListApiCostCentersResponseBody

Centros de costo listados exitosamente

## Example Usage

```typescript
import { ListApiCostCentersResponseBody } from "lapyme/models/operations";

let value: ListApiCostCentersResponseBody = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `requestId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `object`                                                                    | [models.ApiSharedEnume0cf0306aa](../../models/api-shared-enume0cf0306aa.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `data`                                                                      | [models.ApiCostCenter](../../models/api-cost-center.md)[]                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `hasMore`                                                                   | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `nextCursor`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |