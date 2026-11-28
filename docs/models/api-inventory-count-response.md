# ApiInventoryCountResponse

## Example Usage

```typescript
import { ApiInventoryCountResponse } from "lapyme/models";

let value: ApiInventoryCountResponse = {
  requestId: "<id>",
  data: {
    object: "inventory_count",
    id: "80b2a132-8937-4ed5-a3e7-385af5d81811",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiInventoryCountResponseData](../models/api-inventory-count-response-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `warnings`                                                                             | *models.ApiInventoryCountResponseWarning*[]                                            | :heavy_minus_sign:                                                                     | N/A                                                                                    |