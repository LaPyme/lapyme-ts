# V2SupplierListResponse

## Example Usage

```typescript
import { V2SupplierListResponse } from "lapyme/models";

let value: V2SupplierListResponse = {
  requestId: "<id>",
  success: true,
  data: [],
  pagination: {
    page: 694618,
    limit: 283561,
    total: 159529,
    totalPages: 32543,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `requestId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `success`                                                                                    | *true*                                                                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [models.V2SupplierListResponseData](../models/v2-supplier-list-response-data.md)[]           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pagination`                                                                                 | [models.V2SupplierListResponsePagination](../models/v2-supplier-list-response-pagination.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |