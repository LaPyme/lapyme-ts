# PatchApiProductMetafieldsResponse

## Example Usage

```typescript
import { PatchApiProductMetafieldsResponse } from "lapyme/models/operations";

let value: PatchApiProductMetafieldsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      product: {
        id: "4be7e44d-e025-41cb-a98f-12d48698b5e5",
        name: "<value>",
        description: "vice junior scoff zowie scoff powerfully psst",
        category: null,
        sku: "<value>",
        barcode: "<value>",
        imageUrl: "https://sunny-nightlife.org/",
        currency: "Denar",
        cost: 2104.67,
        price: 4639.09,
        taxRate: {
          id: 7340.09,
          value: 6496.5,
        },
        defaultSupplier: {
          id: "99431a08-59f3-4d6f-9b82-691199d39354",
          name: "<value>",
        },
        productType: "product",
        visibility: "both",
        isActive: false,
        organizationSlug: "<value>",
        createdAt: new Date("2026-07-20T09:29:09.875Z"),
        updatedAt: new Date("2024-03-03T10:59:33.677Z"),
        components: [
          {
            productId: "c4a0b478-b0e9-40aa-a06f-be28f0ddf586",
            name: "<value>",
            sku: "<value>",
            quantity: 6058.89,
          },
        ],
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
        variantGroupId: "026bb223-63e3-4c08-9c07-bc90e228d2ad",
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        isExempt: false,
        metafields: [],
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
    warnings: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiProductUpdateResponse](../../models/api-product-update-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |