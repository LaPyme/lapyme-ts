# ListApiInventoryMovementsRequest

## Example Usage

```typescript
import { ListApiInventoryMovementsRequest } from "lapyme/models/operations";

let value: ListApiInventoryMovementsRequest = {
  productId: "b19c7086-4a04-4f45-ab93-5109c0b7aa04",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `productId`                                            | *string*                                               | :heavy_check_mark:                                     | ID de producto o variante                              |
| `warehouseId`                                          | *string*                                               | :heavy_minus_sign:                                     | Filtra por depósito                                    |
| `cursor`                                               | *string*                                               | :heavy_minus_sign:                                     | Valor de next_cursor recibido en la respuesta anterior |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Cantidad máxima de resultados por respuesta            |