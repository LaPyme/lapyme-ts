# ListApiCustomersRequest

## Example Usage

```typescript
import { ListApiCustomersRequest } from "lapyme/models/operations";

let value: ListApiCustomersRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `cursor`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Valor de next_cursor recibido en la respuesta anterior                    |
| `limit`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | Cantidad máxima de resultados por respuesta                               |
| `query`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Texto de búsqueda por nombre, CUIT o email                                |
| `search`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Alias de query                                                            |
| `isActive`                                                                | *boolean*                                                                 | :heavy_minus_sign:                                                        | Filtra por estado activo                                                  |
| `status`                                                                  | [operations.Status](../../models/operations/status.md)[]                  | :heavy_minus_sign:                                                        | Estado lógico del cliente. Puede repetirse o enviarse separado por comas. |