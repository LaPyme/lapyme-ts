# ReceiveApiPurchaseOrderResponse

## Example Usage

```typescript
import { ReceiveApiPurchaseOrderResponse } from "lapyme/models/operations";

let value: ReceiveApiPurchaseOrderResponse = {
  headers: {
    "key": [
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
        id: "22d4c969-5447-4260-a1ab-187df703276a",
        orderNumber: 638516,
        formattedOrderNumber: "<value>",
        status: "cancelled",
        orderDate: new Date("2025-01-05"),
        expectedDate: new Date("2024-03-03"),
        currency: "UAE Dirham",
        supplier: {
          id: "6563a109-407e-475c-86f5-fa19144098e9",
          name: "<value>",
          description: "yuck unless qua nearly stake murky indeed pace because",
          email: "Lera.Koelpin@gmail.com",
          phone: "(489) 833-3040 x906",
          taxIdType: "<value>",
          taxId: "<id>",
          taxCategory: "<value>",
          paymentTermId: "<id>",
          address: "7118 Little Mews",
          apartment: "<value>",
          city: "Sidville",
          province: "<value>",
          postalCode: "17638",
        },
        warehouse: {
          id: "1b97705d-52d7-4bcd-9a08-9bddb77e1cb6",
          name: "<value>",
        },
        createdAt: new Date("2026-08-21T11:36:37.667Z"),
        warehouseId: "98f9a9f1-99f5-4b9b-963e-a10e462ae4f6",
        notes: "<value>",
        items: [
          {
            id: "5ffdba17-1187-41b4-b947-ed17bedd6652",
            orderedQuantity: 4084.61,
            receivedQuantity: 461.56,
            expectedUnitCost: 126103,
            product: {
              id: "90cffb90-4ed6-42a2-b372-0e37b38357cb",
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
      idempotentReplay: false,
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