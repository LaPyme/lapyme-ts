# ApiOrderChangeFulfillmentLocationRequest

## Example Usage

```typescript
import { ApiOrderChangeFulfillmentLocationRequest } from "lapyme/models";

let value: ApiOrderChangeFulfillmentLocationRequest = {
  warehouseId: "177a1c42-3579-4b70-9934-f8836e5a204a",
  items: [
    {
      orderLineId: "d6db7afa-794b-4615-a9b7-446d67e7c145",
      quantity: 376900,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `warehouseId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `items`                                                                        | [models.ApiSharedObject1dbe66a4f8](../models/api-shared-object1dbe66a4f8.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |