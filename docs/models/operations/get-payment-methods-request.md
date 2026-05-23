# GetPaymentMethodsRequest

## Example Usage

```typescript
import { GetPaymentMethodsRequest } from "lapyme/models/operations";

let value: GetPaymentMethodsRequest = {
  search: "Efectivo",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `page`                                                                                             | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Número de página                                                                                   | 1                                                                                                  |
| `limit`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Cantidad de elementos por página                                                                   | 20                                                                                                 |
| `search`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Término de búsqueda por nombre                                                                     | Efectivo                                                                                           |
| `sortBy`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Campo por el cual ordenar                                                                          | name                                                                                               |
| `sortOrder`                                                                                        | [operations.GetPaymentMethodsSortOrder](../../models/operations/get-payment-methods-sort-order.md) | :heavy_minus_sign:                                                                                 | Orden de clasificación                                                                             | asc                                                                                                |