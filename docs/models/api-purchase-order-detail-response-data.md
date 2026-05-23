# ApiPurchaseOrderDetailResponseData

## Example Usage

```typescript
import { ApiPurchaseOrderDetailResponseData } from "lapyme/models";

let value: ApiPurchaseOrderDetailResponseData = {
  object: "purchase_order",
  id: "705e0579-19b8-4046-b5b5-e2a87d7cf946",
  orderNumber: 203042,
  formattedOrderNumber: "<value>",
  status: "cancelled",
  orderDate: new Date("2024-05-23"),
  expectedDate: new Date("2026-08-18"),
  currency: "Cordoba Oro",
  supplier: {
    id: "ebacdb2a-1c5e-4eee-a30f-5983b0f8c084",
    name: "<value>",
    description:
      "fairly which pro upliftingly but super whereas guacamole between",
    email: "Monserrat_Kovacek@yahoo.com",
    phone: "1-498-218-0382 x3346",
    taxIdType: "<value>",
    taxId: "<id>",
    taxCategory: "<value>",
    paymentTermId: "<id>",
    address: "298 Goldner Views",
    apartment: "<value>",
    city: "South Marcelinofurt",
    province: "<value>",
    postalCode: "46341",
  },
  warehouse: {
    id: "c26f4300-69db-4b03-9333-2b7eb47bae62",
    name: "<value>",
  },
  createdAt: new Date("2025-09-22T06:09:13.281Z"),
  warehouseId: "96ef2a02-4fdb-49aa-a39d-8b13125406dc",
  notes: "<value>",
  items: [
    {
      id: "3c21ad7b-292c-4c43-bd52-5df81f1e7d76",
      orderedQuantity: 192.43,
      receivedQuantity: 6385.82,
      expectedUnitCost: 799200,
      product: {
        id: "bf65bcec-fc71-4cbd-a81e-650e4c2588c4",
        name: "<value>",
        sku: null,
        productType: "combo",
        variantOptions: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        optionNames: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                    | *"purchase_order"*                                                                                          | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `orderNumber`                                                                                               | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `formattedOrderNumber`                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `status`                                                                                                    | [models.ApiPurchaseOrderDetailResponseStatus](../models/api-purchase-order-detail-response-status.md)       | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `orderDate`                                                                                                 | [Date](../types/rfcdate.md)                                                                                 | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `expectedDate`                                                                                              | [Date](../types/rfcdate.md)                                                                                 | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `currency`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `supplier`                                                                                                  | [models.ApiPurchaseOrderDetailResponseSupplier](../models/api-purchase-order-detail-response-supplier.md)   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `warehouse`                                                                                                 | [models.ApiPurchaseOrderDetailResponseWarehouse](../models/api-purchase-order-detail-response-warehouse.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `warehouseId`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `notes`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `items`                                                                                                     | [models.ApiPurchaseOrderDetailResponseItem](../models/api-purchase-order-detail-response-item.md)[]         | :heavy_check_mark:                                                                                          | N/A                                                                                                         |