# GetStockPerWarehouseRequest

## Example Usage

```typescript
import { GetStockPerWarehouseRequest } from "lapyme/models/operations";

let value: GetStockPerWarehouseRequest = {
  productId: "prod-123e4567",
  warehouseId: "wh-123e4567",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `page`                           | *number*                         | :heavy_minus_sign:               | Número de página                 | 1                                |
| `limit`                          | *number*                         | :heavy_minus_sign:               | Cantidad de elementos por página | 50                               |
| `productId`                      | *string*                         | :heavy_minus_sign:               | ID del producto para filtrar     | prod-123e4567                    |
| `warehouseId`                    | *string*                         | :heavy_minus_sign:               | ID de la ubicación para filtrar  | wh-123e4567                      |