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
      barcode: "<value>",
      currency: "Rwanda Franc",
      cost: 3628.32,
      price: 8210.33,
      taxRate: {
        id: 6059.87,
        value: 8886.91,
      },
      defaultSupplier: {
        id: "37ba6994-31a0-4859-8f3d-6fb82691199d",
        name: "<value>",
      },
      productType: "combo",
      isActive: true,
      organizationSlug: "<value>",
      createdAt: new Date("2025-01-07T13:40:48.583Z"),
      updatedAt: new Date("2024-11-12T07:43:55.295Z"),
      object: "product",
      variantGroupId: "733bd0ec-4a0b-4478-8b0e-90aa06fbe28f",
      variantOptions: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      isExempt: false,
      metafields: [],
      stockSummary: {
        totalQuantity: 5243.39,
        warehouseCount: 382132,
        byWarehouse: [
          {
            warehouseId: "999b4c64-3938-44ca-958c-f3b39718b070",
            warehouseName: "<value>",
            quantity: 5028.12,
            onHand: 2731.26,
            reservedQuantity: 855.99,
            incomingQuantity: 9009.11,
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