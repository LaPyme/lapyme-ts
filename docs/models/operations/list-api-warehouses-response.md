# ListApiWarehousesResponse

## Example Usage

```typescript
import { ListApiWarehousesResponse } from "lapyme/models/operations";

let value: ListApiWarehousesResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [
      {
        object: "warehouse",
        id: "5e0715bb-b06a-4146-a8c6-25efa021e3b5",
        name: "<value>",
        address: "54720 Simonis Via",
        isDefault: true,
        isActive: false,
        pointsOfSaleCount: 17260,
        memberCount: 150053,
        registerCount: 970687,
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://lone-perp.info",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiWarehouseListResponse](../../models/api-warehouse-list-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |