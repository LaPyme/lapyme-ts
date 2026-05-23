# ApiWarehouseUpdateResponse

## Example Usage

```typescript
import { ApiWarehouseUpdateResponse } from "lapyme/models";

let value: ApiWarehouseUpdateResponse = {
  requestId: "<id>",
  data: {
    warehouse: {
      object: "warehouse",
      id: "63cc75df-5907-4b47-bba6-d9f1dcbe4467",
      name: "<value>",
      address: "490 Turcotte Manor",
      isDefault: true,
      isActive: false,
    },
  },
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `requestId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [models.ApiWarehouseUpdateResponseData](../models/api-warehouse-update-response-data.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `warnings`                                                                               | *any*[]                                                                                  | :heavy_check_mark:                                                                       | N/A                                                                                      |