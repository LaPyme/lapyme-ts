# PatchApiOrderRequest

## Example Usage

```typescript
import { PatchApiOrderRequest } from "lapyme/models/operations";

let value: PatchApiOrderRequest = {
  orderId: "a45a0d40-2588-42c9-a29d-2d8a3ff417cd",
  body: {},
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `orderId`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | ID del pedido                                                                                           |
| `idempotencyKey`                                                                                        | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Obligatoria para ediciones estructurales. Se omite para el contrato histórico que actualiza solo notes. |
| `body`                                                                                                  | *operations.PatchApiOrderRequestBody*                                                                   | :heavy_check_mark:                                                                                      | N/A                                                                                                     |