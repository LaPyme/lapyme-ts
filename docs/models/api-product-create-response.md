# ApiProductCreateResponse

## Example Usage

```typescript
import { ApiProductCreateResponse } from "lapyme/models";

let value: ApiProductCreateResponse = {
  requestId: "<id>",
  data: {
    product: {
      id: "4be7e44d-e025-41cb-a98f-12d48698b5e5",
      name: "<value>",
      description: "vice junior scoff zowie scoff powerfully psst",
      category: null,
      sku: "<value>",
      supplierSku: "<value>",
      barcode: "<value>",
      imageUrl: "https://pessimistic-tabletop.name",
      currency: "Cape Verde Escudo",
      cost: 7340.09,
      price: 6496.5,
      markupPercentage: 5859.18,
      taxRate: {
        id: 5953.74,
        value: 2985.8,
      },
      defaultSupplier: {
        id: "1a0859f3-d6fb-4826-b911-99d39354733b",
        name: "<value>",
      },
      productType: "product",
      visibility: "system",
      availableInPos: false,
      isActive: true,
      organizationSlug: "<value>",
      createdAt: new Date("2025-11-25T01:49:48.226Z"),
      updatedAt: new Date("2024-01-26T22:08:44.823Z"),
      components: [
        {
          productId: "478b0e90-aa06-4fbe-928f-0ddf5869999b",
          name: "<value>",
          sku: "<value>",
          quantity: 7539.54,
        },
      ],
      object: "product",
      variantGroupId: "6439384c-a58c-4f3b-b397-18b0704841ec",
      tags: [
        {
          object: "tag",
          id: "0e6eb6e2-9039-46b3-b5a8-ca8353449182",
          scope: "purchase_order",
          name: "<value>",
          slug: "<value>",
          color: "blue",
          description:
            "dazzling ack gee inasmuch sheepishly who lowball deliberately",
          archivedAt: new Date("2026-07-18T06:36:50.529Z"),
          createdAt: new Date("2024-07-04T20:30:22.631Z"),
          updatedAt: new Date("2026-01-11T05:59:34.900Z"),
        },
      ],
      variantOptions: {
        "key": "<value>",
      },
      isExempt: true,
      metafields: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      variantMetafields: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      stockSummary: {
        totalQuantity: 1110.77,
        warehouseCount: 362197,
        byWarehouse: [],
      },
    },
    idempotentReplay: true,
    costConversions: [],
  },
  warnings: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.ApiProductCreateResponseData](../models/api-product-create-response-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `warnings`                                                                           | *any*[]                                                                              | :heavy_check_mark:                                                                   | N/A                                                                                  |