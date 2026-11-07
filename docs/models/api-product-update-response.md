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
      variantGroupId: "9b4c6439-384c-4a58-9cf3-b39718b07048",
      tags: [],
      variantOptions: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      isExempt: false,
      metafields: [
        {
          key: "<key>",
          value: "<value>",
        },
      ],
      variantMetafields: [],
      stockSummary: {
        totalQuantity: 9296.94,
        warehouseCount: 406381,
        byWarehouse: [
          {
            warehouseId: "b6e29039-6b35-4a8c-8a83-53449182ecbb",
            warehouseName: "<value>",
            quantity: 7029.39,
            onHand: 3002.45,
            reservedQuantity: 8793.03,
            incomingQuantity: 7069.24,
          },
        ],
      },
    },
    costConversions: [
      {
        productId: "c922e270-3cfd-4789-a799-9131c51bc026",
        functionalCost: 747666,
        exchangeRate: 1836.91,
        rateSource: "saved",
        rateDate: "<value>",
      },
    ],
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