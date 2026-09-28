# GetApiProductByIdResponse

## Example Usage

```typescript
import { GetApiProductByIdResponse } from "lapyme/models/operations";

let value: GetApiProductByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    requestId: "<id>",
    data: {
      id: "faccbb36-87b8-4e86-9767-38b5da1cacbd",
      name: "<value>",
      description: "fruitful fervently ramp meh",
      category: {
        id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
        name: "<value>",
      },
      sku: "<value>",
      barcode: "<value>",
      imageUrl: "https://woeful-jogging.biz",
      currency: "Won",
      cost: 9842.81,
      price: 5092.57,
      taxRate: {
        id: 7340.09,
        value: 6496.5,
      },
      defaultSupplier: {
        id: "99431a08-59f3-4d6f-9b82-691199d39354",
        name: "<value>",
      },
      productType: "product",
      visibility: "system",
      isActive: true,
      organizationSlug: "<value>",
      createdAt: new Date("2026-10-15T20:28:07.734Z"),
      updatedAt: new Date("2026-01-16T09:33:12.917Z"),
      components: [],
      object: "product",
      tags: [
        {
          object: "tag",
          id: "9b4c6439-384c-4a58-9cf3-b39718b07048",
          scope: "customer",
          name: "<value>",
          slug: "<value>",
          color: "indigo",
          description:
            "vacantly unless nautical alongside around optimistic for lasting sometimes",
          archivedAt: new Date("2024-05-13T14:06:09.243Z"),
          createdAt: new Date("2026-03-04T18:15:09.469Z"),
          updatedAt: new Date("2026-05-06T00:20:31.712Z"),
        },
      ],
      variantGroupId: "2181f028-ad2c-4884-9928-ee3fbfd2b186",
      variantOptions: {
        "key": "<value>",
        "key1": "<value>",
      },
      isExempt: false,
      metafields: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      stockSummary: {
        totalQuantity: 3621.97,
        warehouseCount: 126283,
        byWarehouse: [
          {
            warehouseId: "348138b3-1e7a-452b-90e8-cdda124dcd42",
            warehouseName: "<value>",
            quantity: 5709.87,
            onHand: 3236.79,
            reservedQuantity: 9655.66,
            incomingQuantity: 8773.04,
          },
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiProductDetailResponse](../../models/api-product-detail-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |