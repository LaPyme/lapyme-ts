# GetApiPurchaseOrderByIdResponse

## Example Usage

```typescript
import { GetApiPurchaseOrderByIdResponse } from "lapyme/models/operations";

let value: GetApiPurchaseOrderByIdResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
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
        id: "a45a7fd5-160a-41a7-baa2-5367b011b0b2",
        name: "<value>",
        description:
          "cod stable snow our famously switchboard as from likewise stiff",
        email: null,
        phone: "802.394.0907",
        taxIdType: "<value>",
        taxId: "<id>",
        taxCategory: null,
        paymentTermId: "<id>",
        address: "14737 N 7th Street",
        apartment: "<value>",
        city: "Legrosburgh",
        province: "<value>",
        postalCode: "80788",
      },
      warehouse: {
        id: "f63e462e-a330-46ca-bae9-348e3a53a6da",
        name: "<value>",
      },
      createdAt: new Date("2026-03-27T15:33:20.950Z"),
      warehouseId: "acdb2a1c-5eee-4e30-bf59-83b0f8c0848a",
      notes: "<value>",
      items: [
        {
          id: "d8043432-f71d-4fa4-a003-b0b2207e252c",
          orderedQuantity: 2660.34,
          receivedQuantity: 3453.08,
          expectedUnitCost: 429535,
          product: {
            id: "577bd322-476c-4496-99b7-68ba81e5a8b0",
            name: "<value>",
            sku: "<value>",
            productType: "combo",
            variantOptions: {
              "key": "<value>",
              "key1": "<value>",
            },
            optionNames: [
              "<value 1>",
              "<value 2>",
              "<value 3>",
            ],
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [models.ApiPurchaseOrderDetailResponse](../../models/api-purchase-order-detail-response.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |