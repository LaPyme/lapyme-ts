# ApiOrderPreparationCreateRequest

## Example Usage

```typescript
import { ApiOrderPreparationCreateRequest } from "lapyme/models";

let value: ApiOrderPreparationCreateRequest = {
  items: [
    {
      orderLineId: "51f775ac-fea7-4555-a187-56ee7fd284e6",
      quantity: 9473.37,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `preparationGroupId`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `warehouseId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `items`                                                                        | [models.ApiSharedObjectc2dbdba87b](../models/api-shared-objectc2dbdba87b.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |