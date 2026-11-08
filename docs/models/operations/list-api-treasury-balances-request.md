# ListApiTreasuryBalancesRequest

## Example Usage

```typescript
import { ListApiTreasuryBalancesRequest } from "lapyme/models/operations";

let value: ListApiTreasuryBalancesRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Valor de next_cursor recibido en la respuesta anterior                      |
| `limit`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `balanceType`                                                               | [models.ApiSharedEnum53162db3eb](../../models/api-shared-enum53162db3eb.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `balanceId`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `status`                                                                    | [models.ApiSharedEnumd952d5ce8e](../../models/api-shared-enumd952d5ce8e.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `asOf`                                                                      | [Date](../../types/rfcdate.md)                                              | :heavy_minus_sign:                                                          | Fecha argentina inclusive para calcular los saldos                          |