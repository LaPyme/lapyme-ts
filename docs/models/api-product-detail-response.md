# ApiProductDetailResponse

## Example Usage

```typescript
import { ApiProductDetailResponse } from "lapyme/models";

let value: ApiProductDetailResponse = {
  requestId: "<id>",
  data: {
    id: "faccbb36-87b8-4e86-9767-38b5da1cacbd",
    name: "<value>",
    description: "fruitful fervently ramp meh",
    category: {
      id: "2d8f757f-880c-44ea-a2a2-181f028ad2c8",
      name: "<value>",
    },
    sku: "<value>",
    barcode: "<value>",
    currency: "Mauritius Rupee",
    cost: 1384.34,
    price: 5095.01,
    taxRate: {
      id: 9015.92,
      value: 9361.09,
    },
    defaultSupplier: {
      id: "fbfd2b18-6778-4eb9-af05-34fde5aab2c7",
      name: "<value>",
    },
    productType: "service",
    isActive: true,
    organizationSlug: "<value>",
    createdAt: new Date("2024-11-10T02:26:01.304Z"),
    updatedAt: new Date("2025-07-17T05:28:12.124Z"),
    object: "product",
    variantGroupId: "1a8278ee-ad26-43a9-9a9a-39d8c19b5b48",
    variantOptions: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    isExempt: false,
    stockSummary: {
      totalQuantity: 6199.54,
      warehouseCount: 410838,
      byWarehouse: [
        {
          warehouseId: "13d87d45-dfff-448a-9ff6-b1ad1dc6f687",
          warehouseName: "<value>",
          quantity: 1282.39,
          onHand: 989.19,
          reservedQuantity: 7955.85,
          incomingQuantity: 6243.26,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.ApiProductDetailResponseData](../models/api-product-detail-response-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |