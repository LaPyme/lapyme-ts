# GetApiPurchaseOrderByIdResponse

## Example Usage

```typescript
import { GetApiPurchaseOrderByIdResponse } from "lapyme/models/operations";

let value: GetApiPurchaseOrderByIdResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
        id: "1d81895d-9d7f-44ea-9636-e0e6181dee4f",
        name: "<value>",
      },
      createdAt: new Date("2026-05-06T11:30:52.684Z"),
      warehouseId: "26f43006-9dbb-4033-8332-b7eb47bae627",
      notes: "<value>",
      items: [],
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiPurchaseOrderDetailResponse](../../models/api-purchase-order-detail-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |