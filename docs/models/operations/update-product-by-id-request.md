# UpdateProductByIdRequest

## Example Usage

```typescript
import { UpdateProductByIdRequest } from "lapyme/models/operations";

let value: UpdateProductByIdRequest = {
  id: "prod-123e4567",
  body: {
    name: "<value>",
    sku: "<value>",
    cost: 4926.28,
    price: 8498.33,
    taxRateId: 849071,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | ID único del producto                                                 | prod-123e4567                                                         |
| `body`                                                                | [models.CreateProductRequest](../../models/create-product-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |