# ApiProductCreateResponseData

## Example Usage

```typescript
import { ApiProductCreateResponseData } from "lapyme/models";

let value: ApiProductCreateResponseData = {
  product: {
    id: "466902fc-c58e-4e6b-8002-706e5660907a",
    name: "<value>",
    description: "construe discourse similar jogging onset",
    category: {
      id: "de3dba53-8bf3-42ac-8263-e27830a84bdd",
      name: "<value>",
    },
    sku: "<value>",
    barcode: "<value>",
    currency: "Rufiyaa",
    cost: 6101.13,
    price: 1768.05,
    taxRate: {
      id: 9271.98,
      value: 2146.53,
    },
    defaultSupplier: {
      id: "8afbe51e-8355-4b42-94e8-f1b1942422b1",
      name: "<value>",
    },
    productType: "combo",
    isActive: false,
    organizationSlug: "<value>",
    createdAt: new Date("2026-08-07T07:41:52.278Z"),
    updatedAt: new Date("2026-08-27T10:40:57.924Z"),
    object: "product",
    variantGroupId: "cfe82376-192a-4255-abbd-5ddf8a44faf5",
    variantOptions: {},
    isExempt: true,
    stockSummary: {
      totalQuantity: 2005.14,
      warehouseCount: 386699,
      byWarehouse: [
        {
          warehouseId: "bb0aef60-d2fc-4197-b070-8b359152bd69",
          warehouseName: "<value>",
          quantity: 3742.31,
          onHand: 612.24,
          reservedQuantity: 5602.23,
          incomingQuantity: 9859.86,
        },
      ],
    },
  },
  idempotentReplay: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `product`                                                                                  | [models.ApiProductCreateResponseProduct](../models/api-product-create-response-product.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `idempotentReplay`                                                                         | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |