# ReceiveApiPurchaseOrderResponse

## Example Usage

```typescript
import { ReceiveApiPurchaseOrderResponse } from "lapyme/models/operations";

let value: ReceiveApiPurchaseOrderResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: {
      receipt: {
        object: "receipt",
        id: "<id>",
        purchaseOrderWarehouseId: null,
        affectedProducts: [],
      },
      purchaseOrder: {
        object: "purchase_order",
        id: "41d9088a-bdee-4956-87bb-8233fcf15924",
        orderNumber: 901721,
        formattedOrderNumber: "<value>",
        status: "draft",
        orderDate: new Date("2025-06-20"),
        expectedDate: new Date("2025-06-12"),
        currency: "Kyat",
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
        createdAt: new Date("2024-12-05T23:14:31.228Z"),
        warehouseId: "c16814e2-a0e9-4dc5-b2f1-0a367aa686d4",
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
      idempotentReplay: true,
    },
    warnings: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | [models.ApiPurchaseOrderReceiptResponse](../../models/api-purchase-order-receipt-response.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |