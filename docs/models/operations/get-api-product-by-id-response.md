# GetApiProductByIdResponse

## Example Usage

```typescript
import { GetApiProductByIdResponse } from "lapyme/models/operations";

let value: GetApiProductByIdResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
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
      barcode: "<value>",
      currency: "Trinidad and Tobago Dollar",
      cost: 5023.57,
      price: 9776.7,
      taxRate: {
        id: 9545.45,
        value: 8570.91,
      },
      defaultSupplier: {
        id: "e2939b22-6734-418f-802e-69ca6e74fd88",
        name: "<value>",
      },
      productType: "service",
      isActive: true,
      organizationSlug: "<value>",
      createdAt: new Date("2026-12-14T18:31:18.269Z"),
      updatedAt: new Date("2025-07-12T03:29:39.613Z"),
      object: "product",
      variantGroupId: "80c4ea2a-2181-4f02-a8ad-2c884928ee3f",
      variantOptions: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      isExempt: true,
      stockSummary: {
        totalQuantity: 3450.16,
        warehouseCount: 107596,
        byWarehouse: [
          {
            warehouseId: "8355b424-e8f1-4b19-a424-22b1798decfe",
            warehouseName: "<value>",
            quantity: 1678.21,
            onHand: 2292.22,
            reservedQuantity: 4791.26,
            incomingQuantity: 4053.93,
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