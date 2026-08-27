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
        name: "<value>",
        companyName: "Murray, Schneider and Harris",
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
        paymentTermId: "<id>",
        paymentTermDays: 857550,
        provinceId: "<id>",
        isActive: true,
        createdAt: new Date("2024-01-18T05:31:49.690Z"),
        updatedAt: new Date("2026-10-10T11:33:50.767Z"),
        tags: [
          {
            object: "tag",
            id: "c4a0b478-b0e9-40aa-a06f-be28f0ddf586",
            scope: "purchase",
            name: "<value>",
            slug: "<value>",
            color: "teal",
            description: "norm youthful ugh drive victoriously",
            archivedAt: new Date("2026-10-03T04:47:37.645Z"),
            createdAt: new Date("2026-03-15T05:11:35.797Z"),
            updatedAt: new Date("2025-02-21T13:32:00.515Z"),
          },
        ],
      },
    ],
    hasMore: false,
    nextCursor: "<value>",
    object: "list",
    url: "https://helpful-sticker.info/",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiCustomerListResponse](../../models/api-customer-list-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |