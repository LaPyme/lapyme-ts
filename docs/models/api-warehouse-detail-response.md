# ApiWarehouseDetailResponse

## Example Usage

```typescript
import { ApiWarehouseDetailResponse } from "lapyme/models";

let value: ApiWarehouseDetailResponse = {
  requestId: "<id>",
  data: {
    object: "warehouse",
    id: "c74f0e8f-9a85-4cb9-b4e3-83dab617b228",
    name: "<value>",
    address: "91132 W Jefferson Street",
    isDefault: false,
    isActive: true,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `requestId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [models.ApiSharedObjectadcf6da6ce](../models/api-shared-objectadcf6da6ce.md) | :heavy_check_mark:                                                           | N/A                                                                          |