# ApiInventoryLotListResponse

## Example Usage

```typescript
import { ApiInventoryLotListResponse } from "lapyme/models";

let value: ApiInventoryLotListResponse = {
  requestId: "<id>",
  object: "list",
  url: "https://gullible-scorpion.info",
  data: [
    {
      object: "inventory_lot",
      id: "c0e88689-4a3e-40c7-875a-4105c8fd023a",
      productId: "b01d30f7-34ef-4a96-b6c4-1b8c8171b1f9",
      kind: "serial",
      code: "<value>",
      expirationDate: new Date("2025-12-16"),
      customsDate: new Date("2026-11-03"),
      createdAt: new Date("2024-03-26T21:00:12.250Z"),
      updatedAt: new Date("2024-01-03T02:24:44.575Z"),
      productName: "<value>",
      variantName: "<value>",
      inStock: true,
    },
  ],
  hasMore: true,
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `object`                                                                                      | *"list"*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [models.ApiInventoryLotListResponseData](../models/api-inventory-lot-list-response-data.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hasMore`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nextCursor`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |