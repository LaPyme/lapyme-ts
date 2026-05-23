# ListApiPointsOfSaleResponse

## Example Usage

```typescript
import { ListApiPointsOfSaleResponse } from "lapyme/models/operations";

let value: ListApiPointsOfSaleResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [
      {
        object: "point_of_sale",
        id: "d28f509d-4cd6-4239-8487-00dc2f73542e",
        number: 750973,
        name: null,
        country: "Palestine",
        address: "69780 S Walnut Street",
        warehouseId: "3d35e9f9-6502-44a3-839e-b791d02a6a52",
        warehouseName: null,
        isAfipEnabled: true,
        isActive: false,
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://silky-drug.com/",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [models.ApiPointOfSaleListResponse](../../models/api-point-of-sale-list-response.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |