# SaveApiPriceListPricesRequest

## Example Usage

```typescript
import { SaveApiPriceListPricesRequest } from "lapyme/models/operations";

let value: SaveApiPriceListPricesRequest = {
  priceListId: "47cea363-917a-48df-a0d2-be7850fe6144",
  idempotencyKey: "<value>",
  body: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `priceListId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `idempotencyKey`                                                                           | *string*                                                                                   | :heavy_check_mark:                                                                         | Clave estable para deduplicar reintentos de la misma operación.                            |
| `body`                                                                                     | [models.ApiPriceListPricesSaveRequest](../../models/api-price-list-prices-save-request.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |