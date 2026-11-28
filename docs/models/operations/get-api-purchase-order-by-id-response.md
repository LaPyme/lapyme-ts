# GetApiPurchaseOrderByIdResponse

## Example Usage

```typescript
import { GetApiPurchaseOrderByIdResponse } from "lapyme/models/operations";

let value: GetApiPurchaseOrderByIdResponse = {
  headers: {},
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
        paymentTermDays: 187571,
        address: "47379 Keeling Courts",
        apartment: "<value>",
        city: "Port Vincenza",
        province: null,
        postalCode: "78887",
      },
      warehouse: {
        id: "fa73eef2-2e9d-414f-a84d-18f683cead94",
        name: "<value>",
      },
      createdAt: new Date("2026-03-27T15:33:20.950Z"),
      tags: [
        {
          object: "tag",
          id: "75a399b6-0212-4a82-9b75-ca998fb65f13",
          scope: "purchase_order",
          name: "<value>",
          slug: "<value>",
          color: "teal",
          description: "huzzah heavenly until by t-shirt geez however",
          archivedAt: new Date("2026-12-06T07:31:36.084Z"),
          createdAt: new Date("2026-08-04T02:33:18.776Z"),
          updatedAt: new Date("2026-03-09T19:55:25.442Z"),
        },
      ],
      warehouseId: "db2a1c5e-eee3-40f5-a983-b0f8c0848ac9",
      notes: "<value>",
      items: [
        {
          id: "043432f7-1dfa-4400-93b0-b2207e252c94",
          orderedQuantity: 4295.35,
          receivedQuantity: 3130.2,
          expectedUnitCost: 484659,
          product: {
            id: "bd322476-c496-49b7-a68b-a81e5a8b078c",
            name: "<value>",
            sku: "<value>",
            supplierSku: "<value>",
            productType: "kit",
            variantOptions: {},
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