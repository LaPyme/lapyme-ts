# CustomerListResponse

## Example Usage

```typescript
import { CustomerListResponse } from "lapyme/models";

let value: CustomerListResponse = {
  success: false,
  data: [],
  pagination: {
    page: 2356.7,
    limit: 680.29,
    total: 1000.19,
    totalPages: 4150.98,
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `success`                                                                               | *boolean*                                                                               | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `data`                                                                                  | [models.CustomerListResponseData](../models/customer-list-response-data.md)[]           | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `pagination`                                                                            | [models.CustomerListResponsePagination](../models/customer-list-response-pagination.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |