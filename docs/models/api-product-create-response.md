# ApiProductCreateResponse

## Example Usage

```typescript
import { ApiProductCreateResponse } from "lapyme/models";

let value: ApiProductCreateResponse = {
  requestId: "<id>",
  data: {
    product: {
      id: "466902fc-c58e-4e6b-8002-706e5660907a",
      name: "<value>",
      description: "construe discourse similar jogging onset",
      category: {
        id: "266530ce-75cf-40a4-81e8-226c43eeb6d9",
        name: "<value>",
      },
      sku: "<value>",
      barcode: "<value>",
      currency: "Venezuelan bolívar",
      cost: 2129.23,
      price: 8568.58,
      taxRate: {
        id: 9545.45,
        value: 8570.91,
      },
      defaultSupplier: {
        id: "e2939b22-6734-418f-802e-69ca6e74fd88",
        name: "<value>",
      },
      productType: "combo",
      isActive: true,
      organizationSlug: "<value>",
      createdAt: new Date("2024-07-31T07:25:38.915Z"),
      updatedAt: new Date("2025-07-23T22:16:38.063Z"),
      object: "product",
      variantGroupId: "bf32ac26-3e27-4830-aa84-bdd32992e378",
      variantOptions: {
        "key": "<value>",
        "key1": "<value>",
      },
      isExempt: false,
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
    idempotentReplay: true,
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