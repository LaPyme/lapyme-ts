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
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
    ],
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
      supplierSku: "<value>",
      barcode: "<value>",
      imageUrl: "https://low-finer.info",
      currency: "Namibia Dollar",
      cost: 5475.87,
      price: 401.51,
      markupPercentage: 2998.14,
      taxRate: {
        id: 5953.74,
        value: 2985.8,
      },
      defaultSupplier: {
        id: "1a0859f3-d6fb-4826-b911-99d39354733b",
        name: "<value>",
      },
      productType: "combo",
      visibility: "both",
      availableInPos: false,
      isActive: true,
      organizationSlug: "<value>",
      createdAt: new Date("2024-03-14T02:45:29.460Z"),
      updatedAt: new Date("2025-08-28T21:40:44.607Z"),
      components: [],
      object: "product",
      variantGroupId: "f028ad2c-8849-428e-ae3f-bfd2b186778e",
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
      variantOptions: {},
      isExempt: true,
      metafields: [],
      variantMetafields: [],
      stockSummary: {
        totalQuantity: 1110.77,
        warehouseCount: 362197,
        byWarehouse: [],
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