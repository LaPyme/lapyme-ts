# ApiPurchaseListResponse

## Example Usage

```typescript
import { ApiPurchaseListResponse } from "lapyme/models";

let value: ApiPurchaseListResponse = {
  requestId: "<id>",
  data: [
    {
      installments: [],
      nextOpenInstallment: {
        dueDate: new Date("2024-11-19"),
        openAmount: 92845,
      },
      overdueOpenTotal: 664670,
      balanceAboveSchedule: 72959,
      object: "purchase",
      id: "0f233585-8cf8-4e83-86d2-4eaef1973c50",
      voucherType: "<value>",
      invoiceDate: "<value>",
      accountDate: "<value>",
      dueDate: "<value>",
      total: 836142,
      balance: 708610,
      warehouseId: "ee75a62a-9729-4b9e-886b-e80dfc6762ec",
      currency: "Norwegian Krone",
      exchangeRate: "<value>",
      supplierInvoiceNumber: "<value>",
      createdAt: new Date("2025-03-02T07:36:42.257Z"),
      supplier: {
        id: "f74be50a-bc92-453e-9d9c-78cca32019bd",
        name: "<value>",
      },
      tags: [],
    },
  ],
  hasMore: true,
  nextCursor: "<value>",
  object: "list",
  url: "https://anguished-bug.net/",
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