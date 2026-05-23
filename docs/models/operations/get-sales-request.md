# GetSalesRequest

## Example Usage

```typescript
import { GetSalesRequest } from "lapyme/models/operations";

let value: GetSalesRequest = {
  search: "Juan Pérez",
  dateFrom: new Date("2025-01-01"),
  dateTo: new Date("2025-12-31"),
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `page`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Número de página                                              | 1                                                             |
| `limit`                                                       | *number*                                                      | :heavy_minus_sign:                                            | Cantidad de elementos por página                              | 50                                                            |
| `search`                                                      | *string*                                                      | :heavy_minus_sign:                                            | Término de búsqueda por nombre de cliente o número de factura | Juan Pérez                                                    |
| `dateFrom`                                                    | [Date](../../types/rfcdate.md)                                | :heavy_minus_sign:                                            | Fecha de inicio del filtro (YYYY-MM-DD)                       | 2025-01-01                                                    |
| `dateTo`                                                      | [Date](../../types/rfcdate.md)                                | :heavy_minus_sign:                                            | Fecha de fin del filtro (YYYY-MM-DD)                          | 2025-12-31                                                    |