# CreatePaymentMethodRequest

## Example Usage

```typescript
import { CreatePaymentMethodRequest } from "lapyme/models";

let value: CreatePaymentMethodRequest = {
  name: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `name`                    | *string*                  | :heavy_check_mark:        | Nombre del método de pago |
| `icon`                    | *string*                  | :heavy_minus_sign:        | Ícono del método de pago  |
| `feePercentage`           | *string*                  | :heavy_minus_sign:        | Porcentaje de comisión    |
| `feeFixed`                | *number*                  | :heavy_minus_sign:        | Comisión fija             |
| `requiresReference`       | *boolean*                 | :heavy_minus_sign:        | Requiere referencia       |
| `isActive`                | *boolean*                 | :heavy_minus_sign:        | Estado activo             |
| `isDefault`               | *boolean*                 | :heavy_minus_sign:        | Es método por defecto     |