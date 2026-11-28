# ApiInventoryCountResponseLine

## Example Usage

```typescript
import { ApiInventoryCountResponseLine } from "lapyme/models";

let value: ApiInventoryCountResponseLine = {
  productId: "37d1c707-8e5c-47e2-a36c-607cb426243d",
  countedQuantity: 9672.94,
  lots: [
    {
      code: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `productId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `countedQuantity`                                                              | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `lots`                                                                         | [models.ApiSharedObjecte986681ed0](../models/api-shared-objecte986681ed0.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `additionalProperties`                                                         | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |