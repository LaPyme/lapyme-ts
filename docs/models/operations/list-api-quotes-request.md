# ListApiQuotesRequest

## Example Usage

```typescript
import { ListApiQuotesRequest } from "lapyme/models/operations";

let value: ListApiQuotesRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Valor de next_cursor recibido en la respuesta anterior                      |
| `limit`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | Cantidad máxima de resultados por respuesta                                 |
| `query`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | Busca por cliente o número de presupuesto                                   |
| `customerId`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | Filtra por cliente                                                          |
| `status`                                                                    | [models.ApiSharedEnumfbc137f7cc](../../models/api-shared-enumfbc137f7cc.md) | :heavy_minus_sign:                                                          | Filtra por estado del presupuesto                                           |