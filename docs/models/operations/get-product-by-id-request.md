# GetProductByIdRequest

## Example Usage

```typescript
import { GetProductByIdRequest } from "lapyme/models/operations";

let value: GetProductByIdRequest = {
  id: "prod-123e4567",
  priceListId: "pl-123e4567",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | ID único del producto                                   | prod-123e4567                                           |
| `priceListId`                                           | *string*                                                | :heavy_minus_sign:                                      | ID de la lista de precios para calcular precio efectivo | pl-123e4567                                             |