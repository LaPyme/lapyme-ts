# GetApiPurchaseOrderByIdResponse

## Example Usage

```typescript
import { GetApiPurchaseOrderByIdResponse } from "lapyme/models/operations";

let value: GetApiPurchaseOrderByIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
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
        id: "c7f1dd90-7695-4b8f-a9fc-6bce3d03f6de",
        name: "<value>",
      },
      createdAt: new Date("2026-03-27T15:33:20.950Z"),
      warehouseId: "acdb2a1c-5eee-4e30-bf59-83b0f8c0848a",
      notes: "<value>",
      items: [
        {
          id: "f6c2da59-0f05-49c8-94fb-366f78187f1b",
          orderedQuantity: 642.28,
          receivedQuantity: 3076.1,
          expectedUnitCost: 674889,
          product: {
            id: "55b6a2fe-81b8-4c36-9bd9-0a3a4f4c6acb",
            name: "<value>",
            sku: "<value>",
            productType: "service",
            variantOptions: {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            optionNames: [
              "<value 1>",
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