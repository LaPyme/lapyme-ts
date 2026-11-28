# ReviewApiInventoryCountResponse

## Example Usage

```typescript
import { ReviewApiInventoryCountResponse } from "lapyme/models/operations";

let value: ReviewApiInventoryCountResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
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