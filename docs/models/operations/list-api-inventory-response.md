# ListApiInventoryResponse

## Example Usage

```typescript
import { ListApiInventoryResponse } from "lapyme/models/operations";

let value: ListApiInventoryResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      warehouse: {
        object: "warehouse",
        id: "cd37a30d-3ff9-4f85-9f54-b54a8eda05dd",
        name: "<value>",
        address: null,
        isDefault: false,
        isActive: true,
      },
      items: [],
    },
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://quick-witted-cinder.net/",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiInventoryListResponse](../../models/api-inventory-list-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |