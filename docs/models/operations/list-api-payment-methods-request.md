# ListApiPaymentMethodsRequest

## Example Usage

```typescript
import { ListApiPaymentMethodsRequest } from "lapyme/models/operations";

let value: ListApiPaymentMethodsRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `cursor`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Valor de next_cursor recibido en la respuesta anterior                   |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Cantidad máxima de resultados por respuesta                              |
| `query`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | Texto de búsqueda por nombre                                             |
| `search`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Alias de query                                                           |
| `isActive`                                                               | *boolean*                                                                | :heavy_minus_sign:                                                       | Filtra por estado activo. Si se omite, el endpoint usa true por defecto. |