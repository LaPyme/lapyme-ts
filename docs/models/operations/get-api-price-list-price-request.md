# GetApiPriceListPriceRequest

## Example Usage

```typescript
import { GetApiPriceListPriceRequest } from "lapyme/models/operations";

let value: GetApiPriceListPriceRequest = {
  priceListId: "7cfaa2b1-6613-45ad-8395-00ea18e4c86b",
  productId: "f0b57ce1-d8fd-463e-b2b8-5825d418f62f",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `priceListId`                                     | *string*                                          | :heavy_check_mark:                                | ID de la lista de precios                         |
| `productId`                                       | *string*                                          | :heavy_check_mark:                                | ID de la variante vendible                        |
| `ifNoneMatch`                                     | *string*                                          | :heavy_minus_sign:                                | ETag débil de una respuesta equivalente anterior. |