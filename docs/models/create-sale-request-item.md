# CreateSaleRequestItem

## Example Usage

```typescript
import { CreateSaleRequestItem } from "lapyme/models";

let value: CreateSaleRequestItem = {
  quantity: 990411,
  unitPrice: 97427,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `productId`                                                | *string*                                                   | :heavy_minus_sign:                                         | ID del producto (si es un producto existente)              |
| `warehouseId`                                              | *string*                                                   | :heavy_minus_sign:                                         | ID de la ubicación (requerido si productId está presente)  |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Nombre del ítem (si es un ítem personalizado)              |
| `taxRateId`                                                | *number*                                                   | :heavy_minus_sign:                                         | ID de alícuota de IVA (requerido si es ítem personalizado) |
| `quantity`                                                 | *number*                                                   | :heavy_check_mark:                                         | Cantidad                                                   |
| `unitPrice`                                                | *number*                                                   | :heavy_check_mark:                                         | Precio unitario en centavos                                |
| `unitCost`                                                 | *number*                                                   | :heavy_minus_sign:                                         | Costo unitario en centavos (requerido para productos)      |
| `discountPercentage`                                       | *number*                                                   | :heavy_minus_sign:                                         | Porcentaje de descuento del ítem                           |