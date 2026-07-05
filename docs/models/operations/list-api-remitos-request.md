# ListApiRemitosRequest

## Example Usage

```typescript
import { ListApiRemitosRequest } from "lapyme/models/operations";

let value: ListApiRemitosRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `cursor`                                               | *string*                                               | :heavy_minus_sign:                                     | Valor de next_cursor recibido en la respuesta anterior |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Cantidad máxima de resultados por respuesta            |
| `saleId`                                               | *string*                                               | :heavy_minus_sign:                                     | Filtra remitos originados en una venta                 |
| `customerId`                                           | *string*                                               | :heavy_minus_sign:                                     | Filtra por cliente                                     |
| `query`                                                | *string*                                               | :heavy_minus_sign:                                     | Busca por cliente o número de remito                   |
| `search`                                               | *string*                                               | :heavy_minus_sign:                                     | Alias de query                                         |
| `dateFrom`                                             | [Date](../../types/rfcdate.md)                         | :heavy_minus_sign:                                     | Fecha inicial del remito                               |
| `dateTo`                                               | [Date](../../types/rfcdate.md)                         | :heavy_minus_sign:                                     | Fecha final del remito                                 |