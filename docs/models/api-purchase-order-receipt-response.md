# ApiPurchaseOrderReceiptResponse

## Example Usage

```typescript
import { ApiPurchaseOrderReceiptResponse } from "lapyme/models";

let value: ApiPurchaseOrderReceiptResponse = {
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
        paymentTermDays: 187571,
        address: "47379 Keeling Courts",
        apartment: "<value>",
        city: "Port Vincenza",
        province: null,
        postalCode: "78887",
      },
      warehouse: {
        id: "f48bba46-ec85-46c3-b2d7-bd1637ffd411",
        name: "<value>",
      },
      createdAt: new Date("2026-11-27T10:31:29.742Z"),
      tags: [],
      warehouseId: "d907695b-8f9f-4c6b-ace3-d03f6deb4c16",
      notes: null,
      items: [],
    },
    idempotentReplay: true,
  },
  warnings: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `data`                                                                                              | [models.ApiPurchaseOrderReceiptResponseData](../models/api-purchase-order-receipt-response-data.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `warnings`                                                                                          | *any*[]                                                                                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |