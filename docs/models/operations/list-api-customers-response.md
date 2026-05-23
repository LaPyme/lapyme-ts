# ListApiCustomersResponse

## Example Usage

```typescript
import { ListApiCustomersResponse } from "lapyme/models/operations";

let value: ListApiCustomersResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    requestId: "<id>",
    data: [
      {
        object: "customer",
        id: "3af7fc7d-ed5f-40a9-91dd-638af09d8aaa",
        name: "<value>",
        companyName: "Murray, Schneider and Harris",
        description:
          "drat till however failing boo christen via grimy emergent",
        email: "Aiden.Leffler32@hotmail.com",
        phone: "586.661.9684",
        address: null,
        apartment: "<value>",
        city: "East Cleo",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        contactType: "<value>",
        defaultPriceListId: "704cd4d0-0ead-4f05-8d63-3a40ee71fb8d",
        paymentTermId: null,
        provinceId: "<id>",
        isActive: false,
        createdAt: new Date("2024-03-20T23:15:47.099Z"),
        updatedAt: new Date("2025-07-08T04:07:38.854Z"),
      },
    ],
    hasMore: true,
    nextCursor: "<value>",
    object: "list",
    url: "https://brilliant-distinction.net/",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiCustomerListResponse](../../models/api-customer-list-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |