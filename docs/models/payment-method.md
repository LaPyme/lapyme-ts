# PaymentMethod

## Example Usage

```typescript
import { PaymentMethod } from "lapyme/models";

let value: PaymentMethod = {
  methodId: "efda23df-1ae6-4b27-aeea-210a9e4e6658",
  amount: 743554,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `methodId`                                                              | *string*                                                                | :heavy_check_mark:                                                      | ID del método de pago                                                   |
| `amount`                                                                | *number*                                                                | :heavy_check_mark:                                                      | Monto en centavos                                                       |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Descripción del pago                                                    |
| `reference`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Referencia del pago (ej: número de transferencia)                       |
| `registerId`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | ID de caja (requerido para efectivo si no se informa safeId)            |
| `safeId`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | ID de caja fuerte (requerido para efectivo si no se informa registerId) |