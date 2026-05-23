# ListV2WarehousesResponse

## Example Usage

```typescript
import { ListV2WarehousesResponse } from "lapyme/models/operations";

let value: ListV2WarehousesResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    requestId: "<id>",
    success: true,
    data: [
      {
        id: "50dab85c-6ee0-4b14-869c-4a352649591d",
        name: "<value>",
        address: null,
        isDefault: true,
        isActive: false,
        pointsOfSaleCount: 34582,
        memberCount: 417395,
        registerCount: 693557,
      },
    ],
    pagination: {
      page: 574341,
      limit: 584803,
      total: 729798,
      totalPages: 93876,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.V2WarehouseListResponse](../../models/v2-warehouse-list-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |