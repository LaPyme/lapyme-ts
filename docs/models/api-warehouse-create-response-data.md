# ApiWarehouseCreateResponseData

## Example Usage

```typescript
import { ApiWarehouseCreateResponseData } from "lapyme/models";

let value: ApiWarehouseCreateResponseData = {
  warehouse: {
    object: "warehouse",
    id: "63cc75df-5907-4b47-bba6-d9f1dcbe4467",
    name: "<value>",
    address: "490 Turcotte Manor",
    isDefault: true,
    isActive: false,
  },
  idempotentReplay: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `warehouse`                                                                  | [models.ApiSharedObjectadcf6da6ce](../models/api-shared-objectadcf6da6ce.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |