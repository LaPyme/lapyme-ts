# CreateWarehouseRequest

## Example Usage

```typescript
import { CreateWarehouseRequest } from "lapyme/models";

let value: CreateWarehouseRequest = {
  name: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `name`                    | *string*                  | :heavy_check_mark:        | Nombre de la ubicación    |
| `address`                 | *string*                  | :heavy_minus_sign:        | Dirección de la ubicación |
| `isDefault`               | *boolean*                 | :heavy_minus_sign:        | Es ubicación por defecto  |
| `isActive`                | *boolean*                 | :heavy_minus_sign:        | Estado activo             |