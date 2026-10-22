# ListApiFundsTransfersRequest

## Example Usage

```typescript
import { ListApiFundsTransfersRequest } from "lapyme/models/operations";

let value: ListApiFundsTransfersRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Valor de next_cursor recibido en la respuesta anterior                      |
| `limit`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `balanceType`                                                               | [models.ApiSharedEnum53162db3eb](../../models/api-shared-enum53162db3eb.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `balanceId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `dateFrom`                                                                  | [Date](../../types/rfcdate.md)                                              | :heavy_minus_sign:                                                          | Fecha de negocio argentina inicial inclusiva                                |
| `dateTo`                                                                    | [Date](../../types/rfcdate.md)                                              | :heavy_minus_sign:                                                          | Fecha de negocio argentina final inclusiva                                  |