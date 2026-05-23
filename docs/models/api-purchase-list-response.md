# ApiPurchaseListResponse

## Example Usage

```typescript
import { ApiPurchaseListResponse } from "lapyme/models";

let value: ApiPurchaseListResponse = {
  requestId: "<id>",
  data: [
    {
      object: "purchase",
      id: "6ea10f23-3585-48cf-88e8-36d24eaef197",
      voucherType: "<value>",
      invoiceDate: "<value>",
      accountDate: "<value>",
      dueDate: null,
      total: 305417,
      balance: 384947,
      warehouseId: "ddbbee75-a62a-4972-99b9-e86be80dfc67",
      currency: "Congolese Franc",
      exchangeRate: "<value>",
      supplierInvoiceNumber: "<value>",
      createdAt: new Date("2026-04-02T08:58:11.331Z"),
      supplier: {
        id: "fd77c624-8fc6-42ba-a044-fd4ea2b29db8",
        name: "<value>",
      },
    },
  ],
  hasMore: false,
  nextCursor: "<value>",
  object: "list",
  url: "https://massive-breastplate.com/",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `requestId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [models.ApiPurchaseListResponseData](../models/api-purchase-list-response-data.md)[]   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `nextCursor`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `object`                                                                               | [models.ApiPurchaseListResponseObject](../models/api-purchase-list-response-object.md) | :heavy_check_mark:                                                                     | List-envelope discriminator.                                                           |
| `url`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | Requested list path.                                                                   |