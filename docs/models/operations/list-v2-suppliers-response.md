# ListV2SuppliersResponse

## Example Usage

```typescript
import { ListV2SuppliersResponse } from "lapyme/models/operations";

let value: ListV2SuppliersResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    success: true,
    data: [
      {
        id: "8528e679-9ea4-41b1-92b5-0c419dc2d9b0",
        name: "<value>",
        companyName: "Smitham LLC",
        description: "navigate on quarrel furthermore",
        email: "Monty57@yahoo.com",
        phone: "977.541.8623 x953",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        paymentTermId: "<id>",
        isActive: false,
      },
    ],
    pagination: {
      page: 694618,
      limit: 283561,
      total: 159529,
      totalPages: 32543,
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `headers`                                                                  | Record<string, *string*[]>                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `result`                                                                   | [models.V2SupplierListResponse](../../models/v2-supplier-list-response.md) | :heavy_check_mark:                                                         | N/A                                                                        |