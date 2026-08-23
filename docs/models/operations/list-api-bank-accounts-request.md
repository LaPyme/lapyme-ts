# ListApiBankAccountsRequest

## Example Usage

```typescript
import { ListApiBankAccountsRequest } from "lapyme/models/operations";

let value: ListApiBankAccountsRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `cursor`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Valor de next_cursor recibido en la respuesta anterior                      |
| `limit`                                                                     | *number*                                                                    | :heavy_minus_sign:                                                          | Cantidad máxima de resultados por respuesta                                 |
| `status`                                                                    | [models.ApiSharedEnumd952d5ce8e](../../models/api-shared-enumd952d5ce8e.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `currency`                                                                  | [models.ApiSharedEnum6cfb146157](../../models/api-shared-enum6cfb146157.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `query`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | Busca por ID, banco, nombre de cuenta, CBU o alias                          |