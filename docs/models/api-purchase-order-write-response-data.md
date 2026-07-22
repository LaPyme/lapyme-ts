# ApiPurchaseOrderWriteResponseData

## Example Usage

```typescript
import { ApiPurchaseOrderWriteResponseData } from "lapyme/models";

let value: ApiPurchaseOrderWriteResponseData = {
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
      paymentTermDays: 198666,
      address: null,
      apartment: "<value>",
      city: "Port Werner",
      province: "<value>",
      postalCode: "65289",
    },
    warehouse: null,
    createdAt: new Date("2026-06-08T14:02:09.205Z"),
    warehouseId: "1cdddc7f-1dd9-4076-895b-8f9fc6bce3d0",
    notes: "<value>",
    items: [],
  },
  idempotentReplay: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `purchaseOrder`                                                              | [models.ApiSharedObject92f376ac7c](../models/api-shared-object92f376ac7c.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `idempotentReplay`                                                           | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |