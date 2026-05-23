# ApiPurchaseOrderDetailResponse

## Example Usage

```typescript
import { ApiPurchaseOrderDetailResponse } from "lapyme/models";

let value: ApiPurchaseOrderDetailResponse = {
  requestId: "<id>",
  data: {
    object: "purchase_order",
    id: "b211e0c9-f6c2-4f91-aca1-b72138c7b900",
    orderNumber: 169124,
    formattedOrderNumber: "<value>",
    status: "sent",
    orderDate: new Date("2025-01-23"),
    expectedDate: null,
    currency: "Pataca",
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
    createdAt: new Date("2024-01-22T20:23:19.284Z"),
    warehouseId: "5290f174-4f02-4c9a-8ca4-bbc78fe3c210",
    notes: "<value>",
    items: [],
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `data`                                                                                            | [models.ApiPurchaseOrderDetailResponseData](../models/api-purchase-order-detail-response-data.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |