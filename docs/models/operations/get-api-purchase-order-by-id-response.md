# GetApiPurchaseOrderByIdResponse

## Example Usage

```typescript
import { GetApiPurchaseOrderByIdResponse } from "lapyme/models/operations";

let value: GetApiPurchaseOrderByIdResponse = {
  headers: {
    "key": [],
    "key1": [
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
        paymentTermDays: 198666,
        address: null,
        apartment: "<value>",
        city: "Port Werner",
        province: "<value>",
        postalCode: "65289",
      },
      warehouse: {
        id: "411cb537-c985-4745-80aa-04cfaf19d969",
        name: "<value>",
      },
      createdAt: new Date("2026-03-27T15:33:20.950Z"),
      tags: [
        {
          object: "tag",
          id: "d17aba97-5a39-49b6-b021-2a82b75ca998",
          scope: "purchase_order",
          name: "<value>",
          slug: "<value>",
          color: "yellow",
          description: "natural huzzah heavenly",
          archivedAt: new Date("2024-12-06T02:21:59.305Z"),
          createdAt: new Date("2024-02-28T10:14:14.640Z"),
          updatedAt: new Date("2025-08-18T02:43:21.277Z"),
        },
      ],
      warehouseId: "cdb2a1c5-eeee-430f-a598-3b0f8c0848ac",
      notes: "<value>",
      items: [
        {
          id: "eb4c1681-4e2a-40e9-9dc5-2f10a367aa68",
          orderedQuantity: 8275.54,
          receivedQuantity: 2939.45,
          expectedUnitCost: 517221,
          product: {
            id: "af6c2da5-90f0-459c-a84f-b366f78187f1",
            name: "<value>",
            sku: "<value>",
            productType: null,
            variantOptions: {
              "key": "<value>",
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