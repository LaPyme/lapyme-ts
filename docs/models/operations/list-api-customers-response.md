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
        paymentTermId: "<id>",
        paymentTermDays: 857550,
        provinceId: "<id>",
        isActive: true,
        createdAt: new Date("2024-01-18T05:31:49.690Z"),
        updatedAt: new Date("2026-10-10T11:33:50.767Z"),
        tags: [
          {
            object: "tag",
            id: "b4c64393-84ca-458c-8f3b-39718b070484",
            scope: "transfer",
            name: "<value>",
            slug: "<value>",
            color: "pink",
            description: "delectable astride downright",
            archivedAt: new Date("2024-08-12T06:34:32.349Z"),
            createdAt: new Date("2024-10-25T15:17:34.484Z"),
            updatedAt: new Date("2024-11-10T16:15:42.311Z"),
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