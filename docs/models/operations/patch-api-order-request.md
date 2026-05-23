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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `orderId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | ID del pedido                                                                                  |
| `body`                                                                                         | [operations.PatchApiOrderRequestBody](../../models/operations/patch-api-order-request-body.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |