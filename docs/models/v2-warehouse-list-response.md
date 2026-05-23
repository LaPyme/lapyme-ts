# V2WarehouseListResponse

## Example Usage

```typescript
import { V2WarehouseListResponse } from "lapyme/models";

let value: V2WarehouseListResponse = {
  requestId: "<id>",
  success: true,
  data: [],
  pagination: {
    page: 574341,
    limit: 584803,
    total: 729798,
    totalPages: 93876,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `requestId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `success`                                                                                      | *true*                                                                                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [models.V2WarehouseListResponseData](../models/v2-warehouse-list-response-data.md)[]           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [models.V2WarehouseListResponsePagination](../models/v2-warehouse-list-response-pagination.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |