# V2ProductListResponse

## Example Usage

```typescript
import { V2ProductListResponse } from "lapyme/models";

let value: V2ProductListResponse = {
  requestId: "<id>",
  success: true,
  data: [
    {
      id: "e82bdd8d-ee79-4244-8994-e48703c720fc",
      name: "<value>",
      description: "terribly ah geez geez since technician how",
      category: {
        id: "da19cbc3-3177-4314-a2bb-d4326e13563d",
        name: "<value>",
      },
      sku: "<value>",
      barcode: null,
      oemCode: "<value>",
      currency: "Quetzal",
      cost: 5237.91,
      price: 4312.08,
      taxRate: {
        id: 9499.53,
        value: 4524.37,
      },
      stockMinimum: 6848.14,
      defaultSupplier: {
        id: "7acfbb5f-d04c-465b-958d-a0100d8438a5",
        name: "<value>",
      },
      productType: "combo",
      isActive: false,
      organizationSlug: "<value>",
      createdAt: new Date("2026-02-06T04:12:28.128Z"),
      updatedAt: new Date("2025-10-12T22:28:20.003Z"),
    },
  ],
  pagination: {
    page: 943898,
    limit: 665923,
    total: 501198,
    totalPages: 15859,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `requestId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `success`                                                                                  | *true*                                                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [models.V2ProductListResponseData](../models/v2-product-list-response-data.md)[]           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [models.V2ProductListResponsePagination](../models/v2-product-list-response-pagination.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |