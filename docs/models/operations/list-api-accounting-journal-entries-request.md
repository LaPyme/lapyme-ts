# ListApiAccountingJournalEntriesRequest

## Example Usage

```typescript
import { ListApiAccountingJournalEntriesRequest } from "lapyme/models/operations";

let value: ListApiAccountingJournalEntriesRequest = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `cursor`                                                     | *string*                                                     | :heavy_minus_sign:                                           | Valor de next_cursor recibido en la respuesta anterior       |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Cantidad máxima de resultados por respuesta                  |
| `sourceType`                                                 | *string*                                                     | :heavy_minus_sign:                                           | Tipo de origen contable, por ejemplo sale o purchase         |
| `sourceId`                                                   | *string*                                                     | :heavy_minus_sign:                                           | ID del recurso de origen                                     |
| `accountId`                                                  | *string*                                                     | :heavy_minus_sign:                                           | Filtra asientos que tengan al menos una línea en esta cuenta |
| `dateFrom`                                                   | [Date](../../types/rfcdate.md)                               | :heavy_minus_sign:                                           | Fecha inicial del asiento                                    |
| `dateTo`                                                     | [Date](../../types/rfcdate.md)                               | :heavy_minus_sign:                                           | Fecha final del asiento                                      |