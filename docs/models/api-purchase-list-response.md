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
      tags: [
        {
          object: "tag",
          id: "9b4c6439-384c-4a58-9cf3-b39718b07048",
          scope: "customer",
          name: "<value>",
          slug: "<value>",
          color: "indigo",
          description:
            "vacantly unless nautical alongside around optimistic for lasting sometimes",
          archivedAt: new Date("2024-05-13T14:06:09.243Z"),
          createdAt: new Date("2026-03-04T18:15:09.469Z"),
          updatedAt: new Date("2026-05-06T00:20:31.712Z"),
        },
      ],
    },
  ],
  hasMore: false,
  nextCursor: "<value>",
  object: "list",
  url: "https://calculating-chasuble.net",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [models.ApiPurchaseListResponseData](../models/api-purchase-list-response-data.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `hasMore`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `nextCursor`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `object`                                                                             | [models.ApiSharedEnum8d46e1ec20](../models/api-shared-enum8d46e1ec20.md)             | :heavy_check_mark:                                                                   | List-envelope discriminator.                                                         |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Requested list path.                                                                 |