# PriceListListResponse

## Example Usage

```typescript
import { PriceListListResponse } from "lapyme/models";

let value: PriceListListResponse = {
  success: true,
  data: [],
  pagination: {
    page: 6242.53,
    limit: 2556.99,
    total: 7252.85,
    totalPages: 2388.57,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `success`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [models.PriceListListResponseData](../models/price-list-list-response-data.md)[]           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [models.PriceListListResponsePagination](../models/price-list-list-response-pagination.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |