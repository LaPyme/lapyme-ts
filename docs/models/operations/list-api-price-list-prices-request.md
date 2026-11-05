# ListApiPriceListPricesRequest

## Example Usage

```typescript
import { ListApiPriceListPricesRequest } from "lapyme/models/operations";

let value: ListApiPriceListPricesRequest = {
  priceListId: "375e91ee-d7e5-4f84-94a1-829b0a1c64ce",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `priceListId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | ID de la lista de precios                                                                     |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Valor opaco de next_cursor recibido en la respuesta anterior. Está ligado a pricing_revision. |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Cantidad máxima de resultados por respuesta                                                   |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Filtra variantes activas o inactivas. Si se omite, incluye ambas.                             |
| `ifNoneMatch`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | ETag débil de una respuesta inicial equivalente. No se aplica a páginas con cursor.           |