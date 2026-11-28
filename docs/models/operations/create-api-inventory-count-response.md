# CreateApiInventoryCountResponse

## Example Usage

```typescript
import { CreateApiInventoryCountResponse } from "lapyme/models/operations";

let value: CreateApiInventoryCountResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      object: "inventory_count",
      id: "80b2a132-8937-4ed5-a3e7-385af5d81811",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [models.ApiInventoryCountResponse](../../models/api-inventory-count-response.md) | :heavy_check_mark:                                                               | N/A                                                                              |