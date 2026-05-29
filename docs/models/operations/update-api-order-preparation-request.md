# UpdateApiOrderPreparationRequest

## Example Usage

```typescript
import { UpdateApiOrderPreparationRequest } from "lapyme/models/operations";

let value: UpdateApiOrderPreparationRequest = {
  orderId: "53d6a273-49e4-418a-81d4-9b6ae1a3b266",
  body: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `orderId`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | ID del pedido                                                                                   |
| `body`                                                                                          | [models.ApiOrderPreparationUpdateRequest](../../models/api-order-preparation-update-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |