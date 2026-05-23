# UpdateApiPriceListRequest

## Example Usage

```typescript
import { UpdateApiPriceListRequest } from "lapyme/models/operations";

let value: UpdateApiPriceListRequest = {
  priceListId: "93d95650-e9d0-479c-8fdb-4c82b174f398",
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `priceListId`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | ID de la lista de precios                                                             |
| `xRequestId`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno.   |
| `body`                                                                                | [models.ApiPriceListMutationRequest](../../models/api-price-list-mutation-request.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |