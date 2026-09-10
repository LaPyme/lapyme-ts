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
    url: "https://helpful-sticker.info/",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `result`                                                                     | [models.ApiCustomerListResponse](../../models/api-customer-list-response.md) | :heavy_check_mark:                                                           | N/A                                                                          |