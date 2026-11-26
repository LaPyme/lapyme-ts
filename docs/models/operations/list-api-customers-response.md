# ListApiCustomersResponse

## Example Usage

```typescript
import { ListApiCustomersResponse } from "lapyme/models/operations";

let value: ListApiCustomersResponse = {
  headers: {},
  result: {
    requestId: "<id>",
    data: [
      {
        object: "customer",
        id: "3af7fc7d-ed5f-40a9-91dd-638af09d8aaa",
        code: "<value>",
        name: "<value>",
        companyName: "Schneider Inc",
        description:
          "drat till however failing boo christen via grimy emergent",
        email: "Aiden.Leffler32@hotmail.com",
        phone: "586.661.9684",
        address: null,
        apartment: "<value>",
        city: "East Cleo",
        deliveryCarrier: "<value>",
        deliveryAddress: "<value>",
        taxId: "<id>",
        taxIdType: "<value>",
        taxCategory: "<value>",
        contactType: "<value>",
        defaultPriceListId: null,
        defaultDiscountPercentage: 7962.85,
        defaultPriceListIsBase: false,
        paymentTermDays: 873006,
        paymentTermLabel: null,
        paymentTermInstallmentDays: null,
        provinceId: "<id>",
        isActive: false,
        createdAt: new Date("2026-11-30T10:45:25.665Z"),
        updatedAt: new Date("2024-02-12T14:17:31.771Z"),
        tags: [],
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://essential-pharmacopoeia.biz/",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiCustomerListResponse](../../models/api-customer-list-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |