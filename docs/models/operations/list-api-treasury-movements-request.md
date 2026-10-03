# ListApiTreasuryMovementsRequest

## Example Usage

```typescript
import { ListApiTreasuryMovementsRequest } from "lapyme/models/operations";

let value: ListApiTreasuryMovementsRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Valor de next_cursor recibido en la respuesta anterior                      |
| `limit`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `balanceType`                                                               | [models.ApiSharedEnum53162db3eb](../../models/api-shared-enum53162db3eb.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `balanceId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `movementType`                                                              | [models.ApiSharedEnumc1c44f3acf](../../models/api-shared-enumc1c44f3acf.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `dateFrom`                                                                  | [Date](../../types/rfcdate.md)                                              | :heavy_minus_sign:                                                          | N/A                                                                         |
| `dateTo`                                                                    | [Date](../../types/rfcdate.md)                                              | :heavy_minus_sign:                                                          | N/A                                                                         |