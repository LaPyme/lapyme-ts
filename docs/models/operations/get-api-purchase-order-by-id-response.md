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
        paymentTermId: "<id>",
        paymentTermDays: 198666,
        address: null,
        apartment: "<value>",
        city: "Port Werner",
        province: "<value>",
        postalCode: "65289",
      },
      warehouse: {
        id: "73701df9-cc25-4f39-89d3-0ecc1c8cf71d",
        name: "<value>",
      },
      createdAt: new Date("2026-03-27T15:33:20.950Z"),
      tags: [
        {
          object: "tag",
          id: "b4c64393-84ca-458c-8f3b-39718b070484",
          scope: "transfer",
          name: "<value>",
          slug: "<value>",
          color: "pink",
          description: "delectable astride downright",
          archivedAt: new Date("2024-08-12T06:34:32.349Z"),
          createdAt: new Date("2024-10-25T15:17:34.484Z"),
          updatedAt: new Date("2024-11-10T16:15:42.311Z"),
        },
      ],
      warehouseId: "db2a1c5e-eee3-40f5-a983-b0f8c0848ac9",
      notes: "<value>",
      items: [
        {
          id: "b4c16814-e2a0-4e9d-bc52-f10a367aa686",
          orderedQuantity: 7716.56,
          receivedQuantity: 5172.21,
          expectedUnitCost: 943658,
          product: {
            id: "6c2da590-f059-4c84-8fb3-66f78187f1b7",
            name: "<value>",
            sku: "<value>",
            productType: "combo",
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