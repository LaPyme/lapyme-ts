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
    "key1": [],
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
        cost: 4639.09,
        price: 7340.09,
        taxRate: {
          id: 6496.5,
          value: 3957.79,
        },
        defaultSupplier: {
          id: "9431a085-9f3d-46fb-8826-91199d393547",
          name: "<value>",
        },
        productType: "product",
        visibility: "purchases",
        isActive: false,
        organizationSlug: "<value>",
        createdAt: new Date("2024-03-03T10:59:33.677Z"),
        updatedAt: new Date("2026-10-10T09:28:53.927Z"),
        components: [
          {
            productId: "4a0b478b-0e90-4aa0-a6fb-e28f0ddf5869",
            name: "<value>",
            sku: "<value>",
            quantity: 5832.75,
          },
        ],
        object: "product",
        tags: [
          {
            object: "tag",
            id: "b4c64393-84ca-458c-8f3b-39718b070484",
            scope: "transfer",
            name: "<value>",
            slug: "<value>",
            color: "pink",
            description: "delectable astride downright",
            archivedAt: new Date("2024-08-12T06:34:32.349Z"),
            createdAt: new Date("2024-10-25T15:17:34.484Z"),
            updatedAt: new Date("2024-11-10T16:15:42.311Z"),
          },
        ],
        variantGroupId: "9182ecbb-3b4e-4bac-a922-e2703cfd7897",
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
        },
        isExempt: true,
        metafields: [],
        stockSummary: {
          totalQuantity: 789.6,
          warehouseCount: 760917,
          byWarehouse: [],
        },
      },
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiProductUpdateResponse](../../models/api-product-update-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |