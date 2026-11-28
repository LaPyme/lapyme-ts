# ApiStockMovementResponseData

## Example Usage

```typescript
import { ApiStockMovementResponseData } from "lapyme/models";

let value: ApiStockMovementResponseData = {
  stockMovementId: "87f727b4-25fd-4ebc-b38e-32c5da2d4d4c",
  transactionGroupId: "1967777a-8009-4c86-bafd-76c6f9cb30a1",
  affectedProductIds: [],
  idempotentReplay: true,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | [models.ApiSharedObject0440e56bc9](../models/api-shared-object0440e56bc9.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `stockMovementId`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `transactionGroupId`                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `affectedProductIds`                                                           | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `idempotentReplay`                                                             | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |