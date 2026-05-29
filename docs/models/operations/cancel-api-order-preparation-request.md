# CancelApiOrderPreparationRequest

## Example Usage

```typescript
import { CancelApiOrderPreparationRequest } from "lapyme/models/operations";

let value: CancelApiOrderPreparationRequest = {
  orderId: "80fcb042-780c-4f0b-8016-b0d128648c1a",
  preparationId: "5cf4d28d-dddc-4eba-b2a8-835e52243dd8",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `orderId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | ID del pedido                                                                             |
| `preparationId`                                                                           | *string*                                                                                  | :heavy_check_mark:                                                                        | ID de la preparación                                                                      |
| `body`                                                                                    | [models.ApiOrderOptionalReasonRequest](../../models/api-order-optional-reason-request.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |