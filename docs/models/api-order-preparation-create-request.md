# ApiOrderPreparationCreateRequest

## Example Usage

```typescript
import { ApiOrderPreparationCreateRequest } from "lapyme/models";

let value: ApiOrderPreparationCreateRequest = {
  items: [
    {
      orderLineId: "51f775ac-fea7-4555-a187-56ee7fd284e6",
      quantity: 947337,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `warehouseId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `items`                                                                        | [models.ApiSharedObject1dbe66a4f8](../models/api-shared-object1dbe66a4f8.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |