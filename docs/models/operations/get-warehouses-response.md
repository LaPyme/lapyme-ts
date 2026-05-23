# GetWarehousesResponse

## Example Usage

```typescript
import { GetWarehousesResponse } from "lapyme/models/operations";

let value: GetWarehousesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    success: true,
    data: [
      {
        id: "2995d261-5315-43db-9527-623b8387aae6",
        name: "<value>",
        address: "888 Highfield Road",
        isDefault: true,
        isActive: false,
      },
    ],
    pagination: {
      page: 9436.82,
      limit: 9161.59,
      total: 9120.3,
      totalPages: 8263.04,
    },
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [operations.GetWarehousesResponseBody](../../models/operations/get-warehouses-response-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |