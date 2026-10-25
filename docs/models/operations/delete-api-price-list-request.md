# DeleteApiPriceListRequest

## Example Usage

```typescript
import { DeleteApiPriceListRequest } from "lapyme/models/operations";

let value: DeleteApiPriceListRequest = {
  priceListId: "2db06f18-3112-4a63-be85-bf4a2e7275cc",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `priceListId`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | ID de la lista de precios                                                           |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |