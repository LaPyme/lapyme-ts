# ChangeApiOrderFulfillmentLocationRequest

## Example Usage

```typescript
import { ChangeApiOrderFulfillmentLocationRequest } from "lapyme/models/operations";

let value: ChangeApiOrderFulfillmentLocationRequest = {
  orderId: "1969a5bc-8d09-4e55-b901-d94296235401",
  body: {
    warehouseId: "8f55356e-2399-4b72-8add-881fe348eb04",
    items: [],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `orderId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | ID del pedido                                                                                                    |
| `body`                                                                                                           | [models.ApiOrderChangeFulfillmentLocationRequest](../../models/api-order-change-fulfillment-location-request.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |