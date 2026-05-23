# ApiWarehouseUpdateResponse

## Example Usage

```typescript
import { ApiWarehouseUpdateResponse } from "lapyme/models";

let value: ApiWarehouseUpdateResponse = {
  requestId: "<id>",
  data: {
    warehouse: {
      object: "warehouse",
      id: "8b31d3c8-a104-4dc7-905f-b9a297418750",
      name: "<value>",
      address: "4235 S 9th Street",
      isDefault: false,
      isActive: true,
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