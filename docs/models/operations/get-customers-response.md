# GetCustomersResponse

## Example Usage

```typescript
import { GetCustomersResponse } from "lapyme/models/operations";

let value: GetCustomersResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    success: true,
    data: [],
    pagination: {
      page: 2356.7,
      limit: 680.29,
      total: 1000.19,
      totalPages: 4150.98,
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `result`                                                              | [models.CustomerListResponse](../../models/customer-list-response.md) | :heavy_check_mark:                                                    | N/A                                                                   |