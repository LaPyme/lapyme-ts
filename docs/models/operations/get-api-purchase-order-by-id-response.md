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
        id: "0978f48b-ba46-4ec8-b56c-32d7bd1637ff",
        name: "<value>",
      },
      createdAt: new Date("2026-03-27T15:33:20.950Z"),
      tags: [
        {
          object: "tag",
          id: "fd0e6eb6-e290-4396-ab35-a8ca83534491",
          scope: "customer",
          name: "<value>",
          slug: "<value>",
          color: "blue",
          description:
            "striking angrily oily brightly commandeer justly where unto",
          archivedAt: new Date("2024-07-02T07:10:54.132Z"),
          createdAt: new Date("2025-08-08T00:49:49.551Z"),
          updatedAt: new Date("2026-07-18T06:36:50.529Z"),
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
            supplierSku: "<value>",
            productType: "service",
            variantOptions: {
              "key": "<value>",
              "key1": "<value>",
            },
            optionNames: [
              "<value 1>",
              "<value 2>",
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