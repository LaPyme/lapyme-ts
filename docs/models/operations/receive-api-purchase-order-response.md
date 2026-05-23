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
        id: "2da75755-cca1-4c32-a03e-de0e3c5e56d1",
        orderNumber: 831139,
        formattedOrderNumber: "<value>",
        status: "sent",
        orderDate: new Date("2026-10-21"),
        expectedDate: new Date("2025-11-04"),
        currency: "Quetzal",
        supplier: null,
        warehouse: {
          id: "1d81895d-9d7f-44ea-9636-e0e6181dee4f",
          name: "<value>",
        },
        createdAt: new Date("2026-05-20T18:33:59.558Z"),
        warehouseId: "f9b148ba-5519-4223-8410-1eeac0aecd58",
        notes: "<value>",
        items: [
          {
            id: "ea2bddf0-b510-4bbb-bd72-f7ddd3f88af5",
            orderedQuantity: 2920.87,
            receivedQuantity: 6196.14,
            expectedUnitCost: 863252,
            product: {
              id: "d461c768-a690-4144-952a-3d8d4113b6cb",
              name: "<value>",
              sku: "<value>",
              productType: "service",
              variantOptions: {},
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