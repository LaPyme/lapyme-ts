# GetApiProductByIdResponse

## Example Usage

```typescript
import { GetApiProductByIdResponse } from "lapyme/models/operations";

let value: GetApiProductByIdResponse = {
  headers: {
    "key": [],
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
      cost: 5092.57,
      price: 5475.87,
      taxRate: {
        id: 6496.5,
        value: 3957.79,
      },
      defaultSupplier: null,
      productType: "kit",
      visibility: "sales",
      availableInPos: false,
      isActive: false,
      organizationSlug: "<value>",
      createdAt: new Date("2024-06-11T06:47:04.747Z"),
      updatedAt: new Date("2025-12-22T09:52:01.303Z"),
      components: [],
      object: "product",
      variantGroupId: "181f028a-d2c8-4849-928e-e3fbfd2b1867",
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
      variantMetafields: [],
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
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [models.ApiProductDetailResponse](../../models/api-product-detail-response.md) | :heavy_check_mark:                                                             | N/A                                                                            |