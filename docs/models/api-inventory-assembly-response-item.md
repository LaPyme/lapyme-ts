# ApiInventoryAssemblyResponseItem

## Example Usage

```typescript
import { ApiInventoryAssemblyResponseItem } from "lapyme/models";

let value: ApiInventoryAssemblyResponseItem = {
  productId: "0ed672e3-8748-45a3-b442-f1be04abcf52",
  lots: [
    {
      lotId: "2343a648-57d5-47ab-97e7-294910fa8f5f",
      code: "<value>",
      unresolvedCode: "<value>",
      quantity: 1340.92,
      expirationDate: new Date("2024-12-26"),
      productId: "99a5fe65-93d8-4d69-8994-c14564b9f9c3",
      movementType: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `productId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `lots`                                                                         | [models.ApiSharedObject04c94b5884](../models/api-shared-object04c94b5884.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |