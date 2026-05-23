# V2PurchaseListResponse

## Example Usage

```typescript
import { V2PurchaseListResponse } from "lapyme/models";

let value: V2PurchaseListResponse = {
  requestId: "<id>",
  success: true,
  data: [],
  pagination: {
    page: 921075,
    limit: 429581,
    total: 482668,
    totalPages: 84256,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `requestId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `success`                                                                                    | *true*                                                                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [models.V2PurchaseListResponseData](../models/v2-purchase-list-response-data.md)[]           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `pagination`                                                                                 | [models.V2PurchaseListResponsePagination](../models/v2-purchase-list-response-pagination.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |