# ApiPointOfSaleListResponse

## Example Usage

```typescript
import { ApiPointOfSaleListResponse } from "lapyme/models";

let value: ApiPointOfSaleListResponse = {
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
  url: "https://trivial-boyfriend.net",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `requestId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [models.ApiPointOfSaleListResponseData](../models/api-point-of-sale-list-response-data.md)[]   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `hasMore`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `nextCursor`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `object`                                                                                       | [models.ApiPointOfSaleListResponseObject](../models/api-point-of-sale-list-response-object.md) | :heavy_check_mark:                                                                             | List-envelope discriminator.                                                                   |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | Requested list path.                                                                           |