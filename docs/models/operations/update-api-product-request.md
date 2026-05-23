# UpdateApiProductRequest

## Example Usage

```typescript
import { UpdateApiProductRequest } from "lapyme/models/operations";

let value: UpdateApiProductRequest = {
  productId: "ef066733-1659-4f7c-a07c-44158bddfea8",
  body: {},
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `productId`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | ID del producto                                                                     |
| `xRequestId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | ID opcional de la solicitud para trazabilidad. Si se omite, el servidor genera uno. |
| `body`                                                                              | [models.ApiProductUpdateRequest](../../models/api-product-update-request.md)        | :heavy_check_mark:                                                                  | N/A                                                                                 |