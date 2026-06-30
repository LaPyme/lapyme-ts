# ConfirmApiPurchaseOrderResponse

## Example Usage

```typescript
import { ConfirmApiPurchaseOrderResponse } from "lapyme/models/operations";

let value: ConfirmApiPurchaseOrderResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: {
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
          id: "f63e462e-a330-46ca-bae9-348e3a53a6da",
          name: "<value>",
        },
        createdAt: new Date("2026-05-23T18:11:16.333Z"),
        warehouseId: "7f1dd907-695b-48f9-9fc6-bce3d03f6deb",
        notes: "<value>",
        items: [],
      },
      idempotentReplay: true,
    },
    warnings: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [models.ApiPurchaseOrderWriteResponse](../../models/api-purchase-order-write-response.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |