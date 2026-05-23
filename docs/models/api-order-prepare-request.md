# ApiOrderPrepareRequest

## Example Usage

```typescript
import { ApiOrderPrepareRequest } from "lapyme/models";

let value: ApiOrderPrepareRequest = {
  items: [
    {
      orderLineId: "d6db7afa-794b-4615-a9b7-446d67e7c145",
      quantity: 376900,
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `warehouseId`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `items`                                                                            | [models.ApiOrderPrepareRequestItem](../models/api-order-prepare-request-item.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |