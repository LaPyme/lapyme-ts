# ApiWarehouseCreateResponse

## Example Usage

```typescript
import { ApiWarehouseCreateResponse } from "lapyme/models";

let value: ApiWarehouseCreateResponse = {
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
    idempotentReplay: true,
  },
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `requestId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [models.ApiWarehouseCreateResponseData](../models/api-warehouse-create-response-data.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `warnings`                                                                               | *any*[]                                                                                  | :heavy_check_mark:                                                                       | N/A                                                                                      |