# ApiProductUpdateResponse

## Example Usage

```typescript
import { ApiProductUpdateResponse } from "lapyme/models";

let value: ApiProductUpdateResponse = {
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
      availableInPos: false,
      isActive: true,
      organizationSlug: "<value>",
      createdAt: new Date("2026-10-10T09:28:53.927Z"),
      updatedAt: new Date("2026-05-03T11:39:49.038Z"),
      components: [],
      object: "product",
      variantGroupId: "a0b478b0-e90a-4a06-afbe-28f0ddf58699",
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
      variantOptions: {},
      isExempt: false,
      metafields: [],
      variantMetafields: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      stockSummary: {
        totalQuantity: 7641.45,
        warehouseCount: 722057,
        byWarehouse: [
          {
            warehouseId: "3b4ebac9-22e2-4703-8cfd-7897999131c5",
            warehouseName: "<value>",
            quantity: 7242.34,
            onHand: 7810.35,
            reservedQuantity: 190.75,
            incomingQuantity: 1501.68,
          },
        ],
      },
    },
    costConversions: [],
  },
  warnings: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.ApiProductUpdateResponseData](../models/api-product-update-response-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `warnings`                                                                           | *any*[]                                                                              | :heavy_check_mark:                                                                   | N/A                                                                                  |